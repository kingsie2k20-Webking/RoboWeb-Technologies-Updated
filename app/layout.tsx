import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'RoboWeb Technologies — Software, AI & Tech Training',
  description:
    'RoboWeb Technologies delivers professional Web Development, Software Solutions, AI Automations, Robotics Education, Internship Programmes, and Industry-Oriented Training.',
  generator: 'v0.app',
  icons: {
    icon: '/icon1.png',
  },
}

export const viewport: Viewport = {
  colorScheme: 'dark',
  themeColor: '#020617',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
