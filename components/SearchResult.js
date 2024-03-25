import Link from 'next/link';

const SearchResult = ({ query, results, onHide }) => {
    return (
        <div className="absolute left-0 top-12 z-[999] w-full rounded-md bg-white p-4 shadow">
            <p className="!text-lg">
                Showing results for
                <span className="font-semibold"> &quot;{query}&quot;:</span>
            </p>
            <ul role="list" className="divide-y divide-gray-100 [&>*]:py-2">
                {results.length > 0 ? (
                    results.map((item) => (
                        <li key={item.id} className="">
                            <Link
                                className="transition-all hover:text-emerald-600"
                                href={`/docs/${item.id}`}
                                onClick={onHide}
                            >
                                {item.title}
                            </Link>
                        </li>
                    ))
                ) : (
                    <li className="">No document found!</li>
                )}
            </ul>
        </div>
    );
};

export default SearchResult;
