"use client"

import Script from 'next/script';
import clsx from 'clsx';

import CookieConsentBanner from '@/features/cookieConsent/CookieConsentBanner';
import LoadCookies from '@/features/cookieConsent/LoadCookies';
import { Providers } from "@/app/providers"


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
        <CookieConsentBanner />
        <LoadCookies />

        <Providers>
          {children}
        </Providers>

      </body>
    </html>
  )
}
