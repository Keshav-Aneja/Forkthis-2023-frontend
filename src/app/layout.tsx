import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'ForkThis 2023',
  description: "Join Forkthis, the ultimate Git and GitHub experience! Learn, collaborate, and compete in this action-packed event designed for Git enthusiasts.",
  keywords: ["CSI", "Computer society of India", "CSIVIT","Forkthis","Git.Set.Fork","Git","GitHub","Learning Event","Collaboration","Competitions","Version Control","Git Basics","Speaker Sessions","Online Challenge","Git Enthusiasts","Open Source","Code Collaboration"],
  openGraph: {
    title: "ForkThis 2023 - The Ultimate Git and GitHub Experience",
    description: "Join Forkthis, the ultimate Git and GitHub experience! Learn, collaborate, and compete in this action-packed event designed for Git enthusiasts.",
    type: "website",
    url: "https://forkthis-test.csivit.com",
    siteName: "ForkThis 2023",
    images: [
      {
        url: "https://i.imgur.com/L89kbA6.png",
        width: 173,
        height: 156,
        alt: "ForkThis 2023 - The Ultimate Git and GitHub Experience"
      }
    ]
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ToastContainer/>
        {children}
      </body>
    </html>
  )
}
