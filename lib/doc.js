import fs from 'fs';
import matter from 'gray-matter';
import path from 'path';
import { remark } from 'remark';
import html from 'remark-html';

const postsDirectory = path.join(process.cwd(), 'docs');

export const getDocuments = () => {
    const fileNames = fs.readdirSync(postsDirectory);

    const allDocuments = fileNames.map((fileName) => {
        const id = fileName.replace('.md', '');

        const fullPath = path.join(postsDirectory, fileName);
        const fileContents = fs.readFileSync(fullPath, 'utf8');
        const matterResult = matter(fileContents);
        return { id, ...matterResult.data };
    });

    return allDocuments.sort((a, b) => {
        if (a.order < b.order) {
            return -1;
        } else {
            return 1;
        }
    });
};

export const getDocumentById = async (id) => {
    const fullPath = path.join(postsDirectory, `${id}.md`);
    const fileContents = fs.readFileSync(fullPath, 'utf8');

    const matterResult = matter(fileContents);
    const processContent = await remark()
        .use(html)
        .process(matterResult.content);

    const contentHtml = processContent.toString();

    return {
        id,
        contentHtml,
        ...matterResult.data,
    };
};
