import type { Metadata } from 'next';
import { Bebas_Neue, Inter } from 'next/font/google';
import './globals.css';
import { Navbar } from '@/components/ui/Navbar';
import { Footer } from '@/components/ui/Footer';

const bebasNeue = Bebas_Neue({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-display',
  display: 'swap',
});

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-body',
  display: 'swap',
});

export const metadata: Metadata = {
  title: {
    default: 'NexoAutoCare — Premium Auto Detailing in Faisalabad',
    template: '%s | NexoAutoCare',
  },
  description:
    "Faisalabad's premier auto detailing studio. Paint correction, ceramic coating, interior revival — done right, by appointment only.",
  keywords: [
    'auto detailing Faisalabad',
    'car detailing Pakistan',
    'ceramic coating Faisalabad',
    'paint correction Faisalabad',
    'car wash Faisalabad',
    'NexoAutoCare',
  ],
  openGraph: {
    title: 'NexoAutoCare — Premium Auto Detailing in Faisalabad',
    description: "Faisalabad's premier auto detailing studio.",
    type: 'website',
    locale: 'en_PK',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${bebasNeue.variable} ${inter.variable}`}>
      <body className="bg-[#0a0a0a] text-white font-body antialiased">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
