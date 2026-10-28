import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Manrope, Source_Serif_4 } from 'next/font/google'
import { Toaster } from '@/components/ui/sonner'
import { AppShell } from '@/components/app-shell'
import './globals.css'

const manrope = Manrope({
  subsets: ['latin'],
  variable: '--font-manrope',
  display: 'swap',
})

const sourceSerif = Source_Serif_4({
  subsets: ['latin'],
  variable: '--font-source-serif',
  display: 'swap',
})

export const metadata: Metadata = {
  title: {
    default: "OurSociety — Reddy's Avenue",
    template: '%s · OurSociety',
  },
  applicationName: 'OurSociety',
  description:
    "OurSociety: community app for Reddy's Avenue Owners Welfare Association (RAOWA), Nizampet. Maintenance, finances, committees, meetings, amenities and resident requests.",
  generator: 'v0.app',
  manifest: '/manifest.webmanifest',
  appleWebApp: {
    capable: true,
    statusBarStyle: 'default',
    title: 'OurSociety',
  },
}

export const viewport: Viewport = {
  colorScheme: 'light',
  themeColor: '#1f5c4d',
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="light bg-background">
      <body
        className={`${manrope.variable} ${sourceSerif.variable} font-sans antialiased`}
      >
        <AppShell>{children}</AppShell>
        <Toaster position="top-center" />
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
