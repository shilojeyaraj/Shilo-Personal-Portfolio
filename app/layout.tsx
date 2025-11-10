import React from 'react'
import './globals.css'
import { Inter, JetBrains_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/react'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
})

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-mono',
})

export const metadata = {
  title: 'Shilo Jeyaraj - Full Stack Developer',
  description: 'Portfolio of Shilo Jeyaraj, a passionate Software developer specializing in modern web technologies, AI, and innovative solutions.',
  keywords: 'Shilo Jeyaraj, Full Stack Developer, React, Next.js, TypeScript, Python, AI, Machine Learning',
  authors: [{ name: 'Shilo Jeyaraj' }],
  creator: 'Shilo Jeyaraj',
  openGraph: {
    title: 'Shilo Jeyaraj - Full Stack Developer',
    description: 'Portfolio of Shilo Jeyaraj, a passionate Software developer',
    url: 'https://shilojeyaraj.com',
    siteName: 'Shilo Jeyaraj Portfolio',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Shilo Jeyaraj - Software Developer',
    description: 'Portfolio of Shilo , a passionate Software developer',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${jetbrainsMono.variable}`}>
      <body className="font-sans antialiased bg-background text-foreground">
        {children}
        <Analytics />
      </body>
    </html>
  )
} 