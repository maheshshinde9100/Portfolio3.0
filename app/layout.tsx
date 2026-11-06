import type { Metadata, Viewport } from 'next'
import { GeistSans } from 'geist/font/sans'
import { GeistMono } from 'geist/font/mono'
import './globals.css'
import { ThemeProvider } from '@/components/theme-provider'

export const metadata: Metadata = {
  title: 'Mahesh Shinde | Full stack developer',
  description:
    'Mahesh Shinde is a Java and full stack developer from Maharashtra, India, building Spring Boot services, React interfaces, and IoT systems.',
  generator: 'mahesh.dev',
  openGraph: {
    title: 'Mahesh Shinde | Full stack developer',
    description:
      'Java and full stack developer building reliable backends and calm, human centred interfaces.',
    type: 'website',
  },
}

export const viewport: Viewport = {
  themeColor: '#121212',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning className={`${GeistSans.variable} ${GeistMono.variable}`}>
      <body>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false} disableTransitionOnChange>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
