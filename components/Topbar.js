import Image from 'next/image';
import Search from './Search';

const Topbar = ({ documents }) => {
    return (
        <div
            className="fixed inset-x-0 top-0 z-50 bg-white bg-white/[var(--bg-opacity-light)] px-4 backdrop-blur-sm transition dark:bg-[#17181C] dark:backdrop-blur sm:px-6 lg:left-72 lg:z-30 lg:px-8 xl:left-80"
            style={{ '--bg-opacity-light': 0.5, '--bg-opacity-dark': 0.2 }}
        >
            <div className="container flex h-14 items-center justify-between gap-12">
                <div className="absolute inset-x-0 top-full h-px bg-zinc-900/7.5 transition dark:bg-white/7.5"></div>

                {/* Large device search */}
                <Search documents={documents} />

                {/* <!-- Mobile Responsive Header Starts --> */}
                <div className="flex items-center gap-5 lg:hidden">
                    <button
                        type="button"
                        className="flex h-6 w-6 items-center justify-center rounded-md transition hover:bg-zinc-900/5 dark:hover:bg-white/5"
                        aria-label="Toggle navigation"
                    >
                        <Image
                            src="/assets/icons/hamburger.svg"
                            alt="Menu"
                            width={10}
                            height={10}
                            className="w-2.5 stroke-zinc-900 dark:stroke-white"
                        />
                    </button>
                    <a aria-label="Home" href="/">
                        <Image
                            src="/assets/icons/logo.svg"
                            alt="Protocol"
                            width={100}
                            height={24}
                            className="h-6"
                        />
                    </a>
                </div>
                {/* <!-- Mobile Responsive Header Ends --> */}

                {/* Medium device search */}
                <div className="flex items-center gap-5">
                    <div className="hidden md:block md:h-5 md:w-px md:bg-zinc-900/10 md:dark:bg-white/15"></div>
                    <div className="flex gap-4">
                        <div className="contents lg:hidden">
                            <button
                                type="button"
                                className="focus:[&amp;:not(:focus-visible)]:outline-none flex h-6 w-6 items-center justify-center rounded-md transition hover:bg-zinc-900/5 dark:hover:bg-white/5 lg:hidden"
                                aria-label="Find something..."
                            >
                                <Image
                                    src="./assets/icons/search.svg"
                                    alt="Search"
                                    height={20}
                                    width={20}
                                    className="h-5 w-5"
                                />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Topbar;
