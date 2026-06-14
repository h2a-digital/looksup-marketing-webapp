import type { Metadata } from 'next';
import '../styles/globals.css';
import { site } from '@/content/site';
import { Toast, AnalyticsHost } from '@/components';
import { env } from '../../env';

export const metadata: Metadata = {
  metadataBase: new URL(env.SITE_URL),
  title: {
    default: `${site.app.name} - ${site.app.tagline}`,
    template: `%s | ${site.app.name}`,
  },
  description:
    'Upload front and side selfies, get an AI appearance score in seconds, and follow personalized routines to improve your look over time.',
  keywords: [
    'appearance analysis',
    'ai looks improvement',
    'selfie analyzer',
    'overall score',
    'potential score',
    'hair analysis',
    'haircut tracking',
    'routine builder',
    'photo presence',
    'LooksUP',
  ],
  authors: [{ name: site.company.name, url: 'https://h2adigital.com' }],
  creator: site.company.name,
  applicationName: site.app.name,
  category: 'Health & Fitness',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: env.SITE_URL,
    title: `${site.app.name} - ${site.app.tagline}`,
    description:
      'Analyze your face, hair, and appearance with AI, then follow custom routines and track your progress over time.',
    siteName: site.app.name,
    images: [
      {
        url: '/icon0.svg',
        width: 512,
        height: 512,
        alt: `${site.app.name} app icon`,
        type: 'image/svg+xml',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@looksup',
    creator: '@hakim98bologna',
    title: `${site.app.name} - ${site.app.tagline}`,
    description:
      'Upload selfies, get a looks score, and use AI recommendations to improve your appearance over time.',
    images: ['/icon0.svg'],
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
    google: 'y9xUcPL8jCrDt5sfUnOKnqs3J-4APi3Iw7f4JQbCJGE',
  },
  icons: [
    { rel: 'icon', url: '/favicon.ico', sizes: 'any' },
    { rel: 'icon', url: '/icon0.svg', type: 'image/svg+xml' },
    { rel: 'apple-touch-icon', url: '/icon0.svg', sizes: '180x180' },
  ],
  manifest: '/site.webmanifest',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="antialiased">
        {children}
        <AnalyticsHost />
        <Toast />
      </body>
    </html>
  );
}
