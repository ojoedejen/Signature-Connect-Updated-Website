import type { Metadata, Viewport } from 'next'
import { Outfit, Sora } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const outfit = Outfit({ 
  subsets: ["latin"],
  variable: '--font-outfit',
  display: 'swap',
})

const sora = Sora({ 
  subsets: ["latin"],
  variable: '--font-sora',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Signature Connect - Premium Internet Service Provider | Sierra Leone',
  description: 'High-speed internet access for homes, offices, and commercial establishments. Fiber, Starlink, and PMP connectivity with nationwide coverage, prepaid and postpaid options.',
  keywords: 'internet, ISP, Sierra Leone, fiber, Starlink, PMP, broadband, Freetown, Signature Connect, high-speed internet, prepaid, postpaid',
  authors: [{ name: 'Signature Connect' }],
  openGraph: {
    title: 'Signature Connect - Premium Internet Service Provider',
    description: 'High-speed internet for homes, offices, and commercial establishments through Fiber, Starlink, and PMP.',
    type: 'website',
  },
}

export const viewport: Viewport = {
  themeColor: '#7454EC',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${outfit.variable} ${sora.variable}`}>
      <body className="font-sans antialiased">
        {children}
        <Analytics />
      </body>
    </html>
  )
}
