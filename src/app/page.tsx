import Contact from '@/components/home/Contact';
import Introduction from '@/components/home/Introduction';

export default function Home() {
  return (
    <main className='text-darkgrey flex flex-col gap-y-12 md:gap-y-48 py-24 px-4'>
      <Introduction id="home" />
      <Contact id="contact" />
    </main>
  );
}
