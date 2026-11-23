import type { Metadata, Viewport } from 'next'
import localFont from 'next/font/local'
import './globals.css'
import { profile } from '@/data/profile'
import { siteDescription, siteName, siteTitle, siteUrl } from '@/lib/site'

const poppins = localFont({
  src: [
    { path: './fonts/Poppins-Light.woff2', weight: '300', style: 'normal' },
    { path: './fonts/Poppins-Regular.woff2', weight: '400', style: 'normal' },
    { path: './fonts/Poppins-Medium.woff2', weight: '500', style: 'normal' },
    { path: './fonts/Poppins-SemiBold.woff2', weight: '600', style: 'normal' },
  ],
  variable: '--font-poppins',
  display: 'swap',
  fallback: ['ui-sans-serif', 'system-ui', 'Arial', 'sans-serif'],
  adjustFontFallback: 'Arial',
})

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: siteTitle,
    template: '%s | Mahesh Shinde',
  },
  description: siteDescription,
  keywords: [
    'Mahesh Shinde',
    'full stack developer',
    'Java developer',
    'Spring Boot developer',
    'React developer',
    'backend engineer',
    'Nashik developer',
    'portfolio',
    'open source',
    'GSSoC',
  ],
  authors: [{ name: siteName, url: siteUrl }],
  creator: siteName,
  publisher: siteName,
  category: 'technology',
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: '/',
    siteName,
    title: siteTitle,
    description: siteDescription,
  },
  twitter: {
    card: 'summary_large_image',
    title: siteTitle,
    description: siteDescription,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
      'max-video-preview': -1,
    },
  },
}

export const viewport: Viewport = {
  themeColor: '#f4f2ec',
  colorScheme: 'light',
  width: 'device-width',
  initialScale: 1,
  viewportFit: 'cover',
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Person',
      '@id': `${siteUrl}/#person`,
      name: profile.name,
      url: siteUrl,
      image: `${siteUrl}/profile.jpg`,
      jobTitle: 'Full Stack Developer',
      description: siteDescription,
      email: `mailto:${profile.email}`,
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'Nashik',
        addressRegion: 'Maharashtra',
        addressCountry: 'IN',
      },
      sameAs: [
        profile.github,
        profile.linkedin,
        profile.leetcode,
        profile.stackoverflow,
        profile.hackerrank,
        profile.gfg,
      ],
      knowsAbout: [
        'Java',
        'Spring Boot',
        'Spring Security',
        'React',
        'Next.js',
        'TypeScript',
        'PostgreSQL',
        'MongoDB',
        'Redis',
        'Kafka',
        'Docker',
        'Google Cloud',
        'Internet of Things',
      ],
    },
    {
      '@type': 'WebSite',
      '@id': `${siteUrl}/#website`,
      url: siteUrl,
      name: siteName,
      description: siteDescription,
      inLanguage: 'en',
      publisher: { '@id': `${siteUrl}/#person` },
    },
    {
      '@type': 'ProfilePage',
      '@id': `${siteUrl}/#profile`,
      url: siteUrl,
      name: siteTitle,
      description: siteDescription,
      inLanguage: 'en',
      isPartOf: { '@id': `${siteUrl}/#website` },
      mainEntity: { '@id': `${siteUrl}/#person` },
      about: { '@id': `${siteUrl}/#person` },
    },
  ],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={poppins.variable}>
      <body>
        <a
          href="#main"
          className="fixed left-4 top-4 z-[120] -translate-y-[200%] rounded-[3px] bg-fg px-4 py-2 text-sm text-canvas transition-transform duration-300 ease-out focus-visible:translate-y-0"
        >
          Skip to content
        </a>
        {children}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, '\\u003c') }}
        />
      </body>
    </html>
  )
}
