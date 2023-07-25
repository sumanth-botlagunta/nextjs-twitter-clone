import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import ThemeProvider from '@/contexts/ThemeProvider';
import Darkmode from './Darkmode';
import SideBar from '@/components/SideBar';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'twitter Clone',
  description:
    'a twitter clone created using React, NextJs, tailwind, superbase',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider>
          <Darkmode>
            <div className="w-screen h-screen text-black  bg-white dark:bg-black dark:text-whitetextcolor overflow-x-hidden relative">
              <div className="max-w-[1250px] w-full mx-auto flex relative">
                <section className="h-screen sticky top-0 laptop:w-2/12 max-tablet:w-1/12 max-mobile:w-1/6">
                  <SideBar />
                </section>
                {children}
              </div>
            </div>
          </Darkmode>
        </ThemeProvider>
      </body>
    </html>
  );
}
