import Tag from '@/components/Tag';
import { getDocumentById } from '@/lib/doc';
import Link from 'next/link';

const Document = async ({ params: { docId } }) => {
    const id = docId[1] ?? docId[0];
    const documentContent = await getDocumentById(id);
    return (
        <article className="prose dark:prose-invert">
            <h1>{documentContent.title}</h1>
            <div>
                <span>Publised on: {documentContent.date}</span> by{' '}
                <Link href={`/author/${documentContent.author}`}>
                    {documentContent.author}
                </Link>{' '}
                under the{' '}
                <Link href={`/categories/${documentContent.category}`}>
                    {documentContent.category}
                </Link>{' '}
                category.
            </div>
            <div>
                {documentContent.tags &&
                    documentContent.tags.map((tag) => (
                        <Tag key={tag} tag={tag} />
                    ))}
            </div>
            <div
                className="lead"
                dangerouslySetInnerHTML={{
                    __html: documentContent.contentHtml,
                }}
            />
        </article>
    );
};

export default Document;
