import React from 'react'
import './globals.css'
import { Playfair_Display, Inter } from 'next/font/google'
import { Analytics } from '@vercel/analytics/react'

const playfairDisplay = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-display',
  display: 'swap',
})

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
})

export const metadata = {
  title: 'Shilo Jeyaraj — Software Engineer',
  description: 'Portfolio of Shilo Jeyaraj, a mechatronics engineering student at the University of Waterloo building at the intersection of AI, full-stack, and robotics.',
  keywords: 'Shilo Jeyaraj, Software Engineer, Mechatronics, React, Next.js, TypeScript, Python, AI, Machine Learning',
  authors: [{ name: 'Shilo Jeyaraj' }],
  creator: 'Shilo Jeyaraj',
  openGraph: {
    title: 'Shilo Jeyaraj — Software Engineer',
    description: 'Portfolio of Shilo Jeyaraj, a mechatronics engineering student building at the intersection of AI, full-stack, and robotics.',
    url: 'https://shilojeyaraj.com',
    siteName: 'Shilo Jeyaraj',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Shilo Jeyaraj — Software Engineer',
    description: 'Portfolio of Shilo Jeyaraj, a mechatronics engineering student building at the intersection of AI, full-stack, and robotics.',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${playfairDisplay.variable} ${inter.variable}`}>
      <body className="antialiased" style={{ backgroundColor: '#fafaf9', fontFamily: 'Inter, sans-serif', color: '#111' }}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
