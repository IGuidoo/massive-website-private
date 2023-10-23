
import Script from 'next/script';
import clsx from 'clsx';


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
        <Script
          type="application/javascript"
          src="/klaro.min.js"
        />


        {/* <!-- WIDGET CONFIGURATION --> */}
        <Script
          id="my-script"
          strategy="afterInteractive"
        >
          {`
            var klaroConfig = {
                privacyPolicy: '/privacy.html',
                apps: [
                    {
                        name: 'google-analytics',
                        default: true,
                        title: 'Google Analytics',
                        purposes: ['statistics'],
                        cookies: [/^ga/i]
                    }
                    // ... potentially other apps or settings ...
                ]
            };
          `}
        </Script>
        {/* <!-- Google tag (gtag.js) --> */}
        <Script
          type="application/javascript"
          data-type="application/javascript"
          data-name="google-analytics"
          src="https://www.googletagmanager.com/gtag/js?id=G-02HETLDJ1G"
        />
        <Script
          type="application/javascript"
          data-type="application/javascript"
          data-name="google-analytics"
          src="/google-analytics.js"
        />
        {/* <Providers> */}
        {children}
        {/* </Providers> */}
        {/* <script src="./lib/responsiveNavbarJS.js"></script> */}
      </body>
    </html>
  )
}
