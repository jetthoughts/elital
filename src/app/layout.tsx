import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import './globals.css';

const inter = Inter({ 
  subsets: ['latin'],
  display: 'swap',
  preload: true,
  fallback: ['system-ui', 'arial']
});

export const metadata: Metadata = {
  metadataBase: new URL('https://elital.com'),
  title: {
    default: 'Elital: Find Top Pre-vetted Freelancers From Leading Platforms',
    template: '%s | Elital'
  },
  description: 'Discover freelancers already verified by top companies and platforms. Browse profiles of elite developers and managers. Direct access to top talent.',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://elital.com',
    siteName: 'Elital',
    images: [
      {
        url: 'https://elital.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Elital - Pre-vetted Freelancers'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    site: '@elital',
    creator: '@elital'
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: process.env.NEXT_PUBLIC_GOOGLE_VERIFICATION,
  },
  alternates: {
    canonical: 'https://elital.com',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.className}>
      <head>
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#10B981" />
        <link 
          rel="preload" 
          href={inter.style.fontFamily} 
          as="font" 
          type="font/woff2" 
          crossOrigin="anonymous" 
        />
      </head>
      <body className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}