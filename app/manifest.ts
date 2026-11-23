import type { MetadataRoute } from 'next'
import { siteDescription, siteName } from '@/lib/site'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: `${siteName} — Full Stack Developer`,
    short_name: siteName,
    description: siteDescription,
    start_url: '/',
    display: 'standalone',
    background_color: '#f4f2ec',
    theme_color: '#f4f2ec',
    icons: [
      {
        src: '/icon.svg',
        sizes: 'any',
        type: 'image/svg+xml',
        purpose: 'any',
      },
    ],
  }
}
