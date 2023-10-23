import Head from 'next/head';
import clsx from 'clsx';
import KlaroConsent from '@/components/KlaroConsent';
import "@/config/klaro-config.js"

export const metadata = {
  title: {
    default: 'Massive Online Marketing',
  },
  description:
    'Cache every single thing your app could ever do ahead of time, so your code never even has to run at all.',
}

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={clsx('h-full antialiased')}
      suppressHydrationWarning
    >
      <body className="min-h-full bg-secondary-50 dark:bg-slate-900">
      <KlaroConsent />
          {/* <Providers> */}
            {children}
          {/* </Providers> */}
      </body>
    </html>
  )
}
