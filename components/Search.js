import Image from 'next/image';

const Search = () => {
    return (
        <div class="hidden lg:block lg:max-w-md lg:flex-auto">
            <button
                type="button"
                class="focus:[&amp;:not(:focus-visible)]:outline-none hidden h-8 w-full items-center gap-2 rounded-full bg-white pl-2 pr-3 text-sm text-zinc-500 ring-1 ring-zinc-900/10 transition hover:ring-zinc-900/20 dark:bg-white/5 dark:text-zinc-400 dark:ring-inset dark:ring-white/10 dark:hover:ring-white/20 lg:flex"
            >
                <Image
                    src="/assets/icons/search.svg"
                    alt="search"
                    width={20}
                    height={20}
                    class="h-5 w-5"
                />
                <input
                    type="text"
                    placeholder="Search..."
                    class="flex-1 focus:border-none focus:outline-none"
                />
                <kbd class="ml-auto w-auto text-2xs text-zinc-400 dark:text-zinc-500">
                    <kbd class="font-sans">Ctrl </kbd>
                    <kbd class="font-sans">K</kbd>
                </kbd>
            </button>
            {/* <div class="absolute left-0 top-12 z-[999] w-full rounded-md bg-white p-4 shadow">
                <p class="!text-lg">
                    Showing results for
                    <span class="font-semibold">"keyword":</span>
                </p>
                <ul role="list" class="divide-y divide-gray-100 [&>*]:py-2">
                    <li class="">
                        <a
                            class="transition-all hover:text-emerald-600"
                            href="#"
                        >
                            How to create a new component in Vue.js
                        </a>
                    </li>
                    <li class="">
                        <a
                            class="transition-all hover:text-emerald-600"
                            href="#"
                        >
                            How to create a new component in React.js
                        </a>
                    </li>
                    <li class="">
                        <a
                            class="transition-all hover:text-emerald-600"
                            href="#"
                        >
                            Next.js Routing
                        </a>
                    </li>
                    <li class="">
                        <a
                            class="transition-all hover:text-emerald-600"
                            href="#"
                        >
                            SSR - What is it?
                        </a>
                    </li>
                </ul>
            </div> */}
        </div>
    );
};

export default Search;
