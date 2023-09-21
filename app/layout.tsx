import Navbar from '@/components/Navbar'
import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import ProfilePic from '@/components/ProfilePic'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Joseph Opio - The CS Guy',
  description: 'Welcome to the website of Joseph Opio, the computer science teacher.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="dark:bg-slate-800">
        <Navbar />
        <ProfilePic />
        {children}
      </body>
    </html>
  )
}
