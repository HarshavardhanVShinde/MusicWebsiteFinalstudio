import type { Metadata } from 'next';
import './globals.css';
import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { Toaster } from '@/components/ui/toaster';

export const metadata: Metadata = {
  metadataBase: new URL('https://arohirhythms.in'),
  title: {
    default: 'Arohi Rhythms | Best Music Classes Online & Kolkata | Classical Singing Lessons',
    template: '%s | Arohi Rhythms Music Classes',
  },
  description: 'Arohi Rhythms - Best music classes in Kolkata & online. Learn Hindustani classical singing with expert gurus. Raga, tala, vocal training. Free trial class. Top music academy India.',
  keywords: [
    // Brand & Core Keywords
    'Arohi Rhythms',
    'Arohi Rhythms music classes',
    'classes',
    'music classes',
    'singing classes',
    'classical music classes',
    'classical singing classes',

    // Location-Based Keywords (Critical for Local SEO)
    'music classes Kolkata',
    'singing classes Kolkata',
    'best music classes Kolkata',
    'music academy Kolkata',
    'music school Kolkata',
    'classical music classes Kolkata',
    'Hindustani music classes Kolkata',
    'music classes in Kolkata',
    'music classes near me',
    'music classes West Bengal',
    'music classes India',

    // Online Classes Keywords
    'online music classes',
    'online singing classes',
    'online music classes India',
    'learn music online',
    'learn music from home',
    'online vocal training',
    'virtual music classes',

    // Hindustani Classical Specific
    'Hindustani classical music',
    'Hindustani vocal training',
    'Hindustani classical singing',
    'Indian classical music',
    'raga training',
    'raga classes',
    'tala practice',
    'tala classes',
    'guru shishya parampara',

    // General Music Education
    'vocal lessons',
    'vocal training online',
    'learn singing online',
    'singing lessons',
    'music school',
    'music academy',
    'best music academy',
    'music teacher',
    'singing teacher',

    // Service-Based Keywords
    'free trial music class',
    'music classes for beginners',
    'advanced music classes',
    'personalized music coaching',
    'one on one music classes'
  ],
  authors: [{ name: 'Arohi Rhythms' }],
  creator: 'Arohi Rhythms',
  publisher: 'Arohi Rhythms',
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: 'https://arohirhythms.in',
    siteName: 'Arohi Rhythms Music Classes',
    title: 'Arohi Rhythms | Best Music Classes Kolkata & Online | Classical Singing Lessons',
    description: 'Top music classes in Kolkata & online. Learn Hindustani classical singing at Arohi Rhythms. Expert gurus, raga & tala training. Free trial class available.',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Arohi Rhythms - Best Music Classes in Kolkata & Online',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Arohi Rhythms | Best Music Classes Kolkata & Online',
    description: 'Top music classes in Kolkata & online. Learn Hindustani classical singing. Free trial class.',
    images: ['/og-image.jpg'],
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
  verification: {
    google: 'your-google-site-verification-code', // TODO: Replace with actual code from Google Search Console
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
