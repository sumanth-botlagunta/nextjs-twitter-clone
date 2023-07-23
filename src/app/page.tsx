import SideBar from '@/components/SideBar';
import Maincontent from '@/components/Maincontent';
import Rightbar from '@/components/Rightbar';
import ThemeProvider from '@/contexts/ThemeProvider';
import Darkmode from './Darkmode';

export default function Home() {
  return (
    <ThemeProvider>
      <Darkmode>
        <div className="w-screen h-screen text-black  bg-white dark:bg-black dark:text-whitetextcolor overflow-x-hidden relative">
          <div className="max-w-[1250px] w-full mx-auto flex relative">
            <section className="h-screen sticky top-0 laptop:w-2/12 max-tablet:w-1/12 max-mobile:w-1/6">
              <SideBar />
            </section>
            <main className="laptop:w-7/12 max-tablet:w-8/12 max-mobile:w-5/6">
              <Maincontent />
            </main>
            <section className="h-screen sticky top-0 laptop:w-2/12 max-mobile:hidden">
              <Rightbar />
            </section>
          </div>
        </div>
      </Darkmode>
    </ThemeProvider>
  );
}
