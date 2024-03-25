import Logo from './Logo';
import Sidebar from './Sidebar';
import Topbar from './Topbar';

const Header = () => {
    return (
        <header class="fixed inset-y-0 left-0 z-40 contents w-72 overflow-y-auto border-r border-zinc-900/10 px-6 pb-8 pt-4 dark:border-white/10 lg:block xl:w-80">
            {/* <!-- Logo  --> */}
            <Logo />
            {/* <!-- Logo Ends --> */}
            {/* <!-- Header --> */}
            <Topbar />
            {/* <!-- Header Ends --> */}

            {/* <!-- sidebar nav --> */}
            <Sidebar />
            {/* <!-- Sidebar nav ends --> */}
        </header>
    );
};

export default Header;
