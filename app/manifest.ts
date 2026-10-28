import type { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "OurSociety — Reddy's Avenue",
    short_name: 'OurSociety',
    description:
      "OurSociety: community app for Reddy's Avenue Owners Welfare Association (RAOWA), Nizampet.",
    start_url: '/',
    display: 'standalone',
    background_color: '#f7f6f0',
    theme_color: '#1f5c4d',
    orientation: 'portrait',
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
