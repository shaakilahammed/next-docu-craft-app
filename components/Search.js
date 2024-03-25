'use client';
import { useDebounce } from '@/hooks/useDebounce';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import SearchResult from './SearchResult';

const Search = ({ documents }) => {
    const [searchResult, setSearchResult] = useState([]);
    const [query, setQuery] = useState('');
    const router = useRouter();

    const handleChange = (e) => {
        setQuery(e.target.value);
        doSearch(e.target.value);
    };

    const doSearch = useDebounce((q) => {
        const results =
            q === ''
                ? []
                : documents.filter((doc) =>
                      doc.title.toLowerCase().includes(q.toLowerCase())
                  );
        setSearchResult(results);
    }, 500);

    const hideSearchResult = (e) => {
        e.preventDefault();
        setQuery('');
        router.push(e.target.href);
    };
    return (
        <div className="hidden lg:block lg:max-w-md lg:flex-auto">
            <button
                type="button"
                className="focus:[&amp;:not(:focus-visible)]:outline-none hidden h-8 w-full items-center gap-2 rounded-full bg-white pl-2 pr-3 text-sm text-zinc-500 ring-1 ring-zinc-900/10 transition hover:ring-zinc-900/20 dark:bg-white/5 dark:text-zinc-400 dark:ring-inset dark:ring-white/10 dark:hover:ring-white/20 lg:flex"
            >
                <Image
                    src="/assets/icons/search.svg"
                    alt="search"
                    width={20}
                    height={20}
                    className="h-5 w-5"
                />
                <input
                    type="text"
                    placeholder="Search..."
                    value={query}
                    onChange={handleChange}
                    className="flex-1 focus:border-none focus:outline-none"
                />
                <kbd className="ml-auto w-auto text-2xs text-zinc-400 dark:text-zinc-500">
                    <kbd className="font-sans">Ctrl </kbd>
                    <kbd className="font-sans">K</kbd>
                </kbd>
            </button>
            {query.trim().length > 0 ? (
                <SearchResult
                    query={query}
                    results={searchResult}
                    onHide={hideSearchResult}
                />
            ) : null}
        </div>
    );
};

export default Search;
