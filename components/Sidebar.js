import Link from 'next/link';

const Sidebar = ({ documents }) => {
    const rootDocuments = documents.filter((doc) => !doc.parent);
    const nonRootDocuments = Object.groupBy(
        documents.filter((doc) => doc.parent),
        ({ parent }) => parent
    );

    console.log(nonRootDocuments);
    return (
        <nav className="hidden lg:mt-10 lg:block">
            <ul role="list" className="border-l border-transparent">
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
