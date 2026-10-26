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
    default: 'NexoAutoCare — Premium Mobile Auto Detailing in Faisalabad',
    template: '%s | NexoAutoCare',
  },
  description:
    "Faisalabad's premier mobile auto detailing service. We come to your doorstep — paint correction, ceramic coating, and interior revival, by appointment only.",
  keywords: [
    'mobile auto detailing Faisalabad',
    'doorstep car detailing Pakistan',
    'mobile ceramic coating Faisalabad',
    'paint correction Faisalabad',
    'car detailing at home Faisalabad',
    'NexoAutoCare',
  ],
  openGraph: {
    title: 'NexoAutoCare — Premium Mobile Auto Detailing in Faisalabad',
    description: "Faisalabad's premier mobile auto detailing service — we come to your doorstep.",
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
