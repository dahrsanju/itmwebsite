import { Inter, Plus_Jakarta_Sans } from 'next/font/google';
import './globals.css';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import AOSProvider from '@/components/AOSProvider';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  variable: '--font-plus-jakarta',
  display: 'swap',
});

export const metadata = {
  title: {
    default: 'iTech Manthra - Creative Digital Marketing Agency',
    template: '%s | iTech Manthra',
  },
  description: 'iTech Manthra is a Creative Digital Marketing Company. We provide custom digital solutions including SEO, PPC, social media marketing, web design, and more.',
  metadataBase: new URL('https://www.itechmanthra.com'),
  openGraph: {
    type: 'website',
    locale: 'en_US',
    siteName: 'iTech Manthra',
  },
  twitter: {
    card: 'summary_large_image',
  },
  icons: {
    icon: '/logo-4.png',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${inter.variable} ${plusJakarta.variable}`}>
      <body>
        <AOSProvider>
          <div className="min-h-screen flex flex-col">
            <Header />
            <main className="flex-1">{children}</main>
            <Footer />
          </div>
        </AOSProvider>
      </body>
    </html>
  );
}
