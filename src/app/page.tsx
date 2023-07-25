import Maincontent from '@/components/Maincontent';
import Rightbar from '@/components/Rightbar';

export default function Home() {
  return (
    <>
      <main className="laptop:w-7/12 max-tablet:w-8/12 max-mobile:w-5/6">
        <Maincontent />
      </main>
      <section className="h-screen sticky top-0 laptop:w-2/12 max-mobile:hidden">
        <Rightbar />
      </section>
    </>
  );
}
