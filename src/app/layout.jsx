import clsx from 'clsx'
import { Providers } from '@/app/providers'

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
      <body className="min-h-full bg-white dark:bg-slate-900">
          {/* <Providers> */}
            {children}
          {/* </Providers> */}
      </body>
    </html>
  )
}
