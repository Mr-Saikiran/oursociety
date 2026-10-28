import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Manrope } from 'next/font/google'
import { ThemeProvider } from 'next-themes'
import { Toaster } from '@/components/ui/sonner'
import { AppShell } from '@/components/app-shell'
import { SessionProvider } from '@/components/session-provider'
import { getCurrentUser } from '@/lib/auth'
import { all } from '@/lib/repo'
import './globals.css'

const manrope = Manrope({
  subsets: ['latin'],
  variable: '--font-manrope',
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
  colorScheme: 'light dark',
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#f7f6f0' },
    { media: '(prefers-color-scheme: dark)', color: '#0f1c1c' },
  ],
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
}

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const [user, notices, requests, maintenance] = await Promise.all([
    getCurrentUser(),
    all('notices'),
    all('requests'),
    all('maintenance'),
  ])
  return (
    <html lang="en" className="bg-background" suppressHydrationWarning>
      <body
        className={`${manrope.variable} font-sans antialiased`}
      >
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          <SessionProvider user={user}>
            <AppShell live={{ notices, requests, maintenance }}>{children}</AppShell>
          </SessionProvider>
          <Toaster position="top-center" />
        </ThemeProvider>
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
