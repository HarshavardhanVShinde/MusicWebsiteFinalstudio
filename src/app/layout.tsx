import type { Metadata } from 'next';
import './globals.css';
import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { Toaster } from '@/components/ui/toaster';

export const metadata: Metadata = {
  metadataBase: new URL('https://arohirhythms.in'),
  title: {
    default: 'Arohi Rhythms | Classical Singing Classes & Online Music Lessons from Home',
    template: '%s | Arohi Rhythms',
  },
  description: 'Learn Hindustani classical singing with personalised coaching. Online & offline music classes from home. Expert vocal training in ragas, talas. Book free trial class.',
  keywords: ['classical singing classes', 'Hindustani vocal training', 'online music classes', 'learn music from home', 'Indian classical music', 'vocal lessons', 'raga training', 'tala practice', 'guru shishya parampara'],
  authors: [{ name: 'Arohi Rhythms' }],
  creator: 'Arohi Rhythms',
  publisher: 'Arohi Rhythms',
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: 'https://arohirhythms.in',
    siteName: 'Arohi Rhythms',
    title: 'Arohi Rhythms | Classical Singing Classes & Online Music Lessons',
    description: 'Learn Hindustani classical singing with personalised coaching. Book your free trial class today.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Arohi Rhythms | Classical Singing Classes',
    description: 'Learn Hindustani classical singing with expert guidance',
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
  alternates: {
    canonical: 'https://arohirhythms.in',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className="font-body antialiased">
        <Header />
        <main className="flex-1 min-h-screen">{children}</main>
        <Footer />
        <Toaster />
      </body>
    </html>
  );
}
