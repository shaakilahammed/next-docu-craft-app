'use client';
import {
    getDocumentsByAuthor,
    getDocumentsByCategory,
    getDocumentsByTag,
} from '@/utils/utils';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const Sidebar = ({ documents }) => {
    const pathName = usePathname();
    // console.log(pathName);

    let filteredDocuments = documents;
    if (pathName.includes('/tags')) {
        const tag = pathName.split('/')[2];
        filteredDocuments = getDocumentsByTag(documents, tag);
    } else if (pathName.includes('/categories')) {
        const category = pathName.split('/')[2];
        filteredDocuments = getDocumentsByCategory(documents, category);
    } else if (pathName.includes('/authors')) {
        const author = pathName.split('/')[2];
        filteredDocuments = getDocumentsByAuthor(documents, author);
    }

    const rootDocuments = filteredDocuments.filter((doc) => !doc.parent);
    const nonRootDocuments = Object.groupBy(
        filteredDocuments.filter((doc) => doc.parent),
        ({ parent }) => parent
    );
    const nonRootsKeys = Reflect.ownKeys(nonRootDocuments);
    nonRootsKeys.forEach((key) => {
        const foundInRoots = rootDocuments.find((root) => root.id === key);
        if (!foundInRoots) {
            const foundInDocs = documents.find((doc) => doc.id === key);
            rootDocuments.push(foundInDocs);
        }
    });

    rootDocuments.sort((a, b) => {
        if (a.order < b.order) {
            return -1;
        } else {
            return 1;
        }
    });

    return (
        <nav className="hidden lg:mt-10 lg:block">
            <ul role="list" className="border-l border-zinc-300">
                {rootDocuments.map((doc) => (
                    <li key={doc.id} className="relative">
                        <Link
                            aria-current="page"
                            className="flex justify-between gap-2 py-1 pl-4 pr-3 text-sm text-zinc-700 transition hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-white"
                            href={`/docs/${doc.id}`}
                        >
                            <span className="truncate">{doc.title}</span>
                        </Link>
                        {nonRootDocuments[doc.id] && (
                            <ul role="list" style={{ opacity: 1 }}>
                                {nonRootDocuments[doc.id].map((subDoc) => (
                                    <li key={subDoc.id}>
                                        <Link
                                            className="flex justify-between gap-2 py-1 pl-7 pr-3 text-sm text-zinc-500 transition hover:text-zinc-800 dark:text-zinc-400 dark:hover:text-white"
                                            href={`/docs/${doc.id}/${subDoc.id}`}
                                        >
                                            <span className="truncate">
                                                {subDoc.title}
                                            </span>
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        )}
                    </li>
                ))}
            </ul>
        </nav>
    );
};

export default Sidebar;
