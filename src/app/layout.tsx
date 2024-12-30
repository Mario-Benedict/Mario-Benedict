import type { Metadata } from 'next';
import { Mulish, Poppins } from 'next/font/google';
import './globals.css';
import Header from '@/components/home/Header';
import Footer from '@/components/home/Footer';

const mulish = Mulish({ subsets: ['latin'], variable: '--font-mulish' });
const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '700'],
  variable: '--font-poppins',
});

export const metadata: Metadata = {
  title: 'Mario Benedict | Software Engineer | Cybersecurity Enthusiast',
  description:
    'Software Engineer in Jakarta, Indonesia. Cybersecurity enthusiast and ethical hacker.',
  keywords: [
    'Mario Benedict',
    'software engineer in Jakarta',
    'software engineer in Indonesia',
    'software developer in Jakarta',
    'software developer in Indonesia',
    'software engineer',
    'software developer',
    'web developer',
    'cybersecurity enthusiast',
    'ethical hacker',
  ],
  openGraph: {
    title: 'Mario Benedict | Software Engineer',
    url: process.env.VERCEL_URL,
    type: 'website',
    locale: 'en_US',
    description:
      'Software Engineer in Jakarta, Indonesia. Cybersecurity enthusiast and ethical hacker.',
  },
};

const RootLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <html lang='en'>
      <body className={`${mulish.variable} ${poppins.variable} font-mulish pb-8`}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
};

export default RootLayout;
