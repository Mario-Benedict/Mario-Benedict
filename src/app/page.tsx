import About from '@/components/home/About';
import Contact from '@/components/home/Contact';
import Introduction from '@/components/home/Introduction';

export default function Home() {
  return (
    <main className='text-darkgrey flex flex-col gap-y-6 md:gap-y-48 py-24 px-4'>
      <Introduction id="home" />
      <About id="about" />
      <Contact id="contact" />
    </main>
  );
}
