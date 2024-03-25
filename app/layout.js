import Header from '@/components/Header';
import { getDocuments } from '@/lib/doc';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
    title: 'DocuCraft - A documentation website by protocol',
    description: 'A documentation website by protocol',
};

export default function RootLayout({ children }) {
    const documents = getDocuments();
    console.log(documents);
    return (
        <html lang="en">
            <body className={inter.className}>
                <div class="h-full lg:ml-72 xl:ml-80">
                    <Header />
                    <div class="relative px-4 pt-14 sm:px-6 lg:px-8">
                        <main class="flex-auto py-16">
                            {/* <!-- Green Top Overlay --> */}
                            <div class="absolute inset-0 -z-10 mx-0 max-w-none overflow-hidden">
                                <div class="absolute left-1/2 top-0 ml-[-38rem] h-[25rem] w-[81.25rem] dark:[mask-image:linear-gradient(white,transparent)]">
                                    <div class="absolute inset-0 bg-gradient-to-r from-[#36b49f] to-[#DBFF75] opacity-40 [mask-image:radial-gradient(farthest-side_at_top,white,transparent)] dark:from-[#36b49f]/30 dark:to-[#DBFF75]/30 dark:opacity-100"></div>
                                </div>
                            </div>
                            {children}
                        </main>
                    </div>
                </div>
            </body>
        </html>
    );
}
