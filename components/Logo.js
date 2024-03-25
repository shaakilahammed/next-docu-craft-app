import Image from 'next/image';
import Link from 'next/link';

const Logo = () => {
    return (
        <div className="hidden lg:flex">
            <Link aria-label="Home" href="/">
                <Image
                    src="/assets/icons/logo.svg"
                    alt="Protocol"
                    height={24}
                    width={100}
                    className="h-6 w-auto"
                />
            </Link>
        </div>
    );
};

export default Logo;
