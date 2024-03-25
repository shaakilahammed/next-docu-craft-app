const Sidebar = () => {
    return (
        <nav class="hidden lg:mt-10 lg:block">
            <ul role="list" class="border-l border-transparent">
                <li class="relative">
                    <a
                        aria-current="page"
                        class="flex justify-between gap-2 py-1 pl-4 pr-3 text-sm text-zinc-900 transition dark:text-white"
                        href="/docs"
                    >
                        <span class="truncate">Introduction</span>
                    </a>
                    <ul role="list" style={{ opacity: 1 }}>
                        <li>
                            <a
                                class="flex justify-between gap-2 py-1 pl-7 pr-3 text-sm text-zinc-600 transition hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-white"
                                href="/docs#guides"
                            >
                                <span class="truncate">Guides</span>
                            </a>
                        </li>
                        <li>
                            <a
                                class="flex justify-between gap-2 py-1 pl-7 pr-3 text-sm text-zinc-600 transition hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-white"
                                href="/docs#resources"
                            >
                                <span class="truncate">Resources</span>
                            </a>
                        </li>
                        <li>
                            <a
                                class="flex justify-between gap-2 py-1 pl-7 pr-3 text-sm text-zinc-600 transition hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-white"
                                href="/docs#test"
                            >
                                <span class="truncate">Test</span>
                            </a>
                        </li>
                    </ul>
                </li>
                <li class="relative">
                    <a
                        class="flex justify-between gap-2 py-1 pl-4 pr-3 text-sm text-zinc-600 transition hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-white"
                        href="/docs/quickstart"
                    >
                        <span class="truncate">Quickstart</span>
                    </a>
                </li>
                <li class="relative">
                    <a
                        class="flex justify-between gap-2 py-1 pl-4 pr-3 text-sm text-zinc-600 transition hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-white"
                        href="/docs/sdks"
                    >
                        <span class="truncate">SDKs</span>
                    </a>
                </li>
                <li class="relative">
                    <a
                        class="flex justify-between gap-2 py-1 pl-4 pr-3 text-sm text-zinc-600 transition hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-white"
                        href="/docs/authentication"
                    >
                        <span class="truncate">Authentication</span>
                    </a>
                </li>
                <li class="relative">
                    <a
                        class="flex justify-between gap-2 py-1 pl-4 pr-3 text-sm text-zinc-600 transition hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-white"
                        href="/docs/pagination"
                    >
                        <span class="truncate">Pagination</span>
                    </a>
                </li>
                <li class="relative">
                    <a
                        class="flex justify-between gap-2 py-1 pl-4 pr-3 text-sm text-zinc-600 transition hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-white"
                        href="/docs/errors"
                    >
                        <span class="truncate">Errors</span>
                    </a>
                </li>
                <li class="relative">
                    <a
                        class="flex justify-between gap-2 py-1 pl-4 pr-3 text-sm text-zinc-600 transition hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-white"
                        href="/docs/webhooks"
                    >
                        <span class="truncate">Webhooks</span>
                    </a>
                </li>
            </ul>
        </nav>
    );
};

export default Sidebar;
