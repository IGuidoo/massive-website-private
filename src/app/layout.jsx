import { Inter } from 'next/font/google'
import localFont from 'next/font/local'
import clsx from 'clsx'

import { Providers } from '@/app/providers'
// import { Layout } from '@/app/docs/_components/Layout'

import Navbar from '@/components/Aids'


const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
})

// Use local version of Lexend so that we can use OpenType features
const lexend = localFont({
  src: '../fonts/lexend.woff2',
  display: 'swap',
  variable: '--font-lexend',
})

export const metadata = {
  title: {
    template: 'test',
    default: 'Massive Online Marketing',
  },
  description:
    'Cache every single thing your app could ever do ahead of time, so your code never even has to run at all.',
}

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={clsx('h-full antialiased', inter.variable, lexend.variable)}
      suppressHydrationWarning
    >
      <body className="min-h-full bg-white dark:bg-slate-900">
        <main>
          <Providers>
            {children}
          </Providers>
        </main>
      </body>
    </html>
  )
}
