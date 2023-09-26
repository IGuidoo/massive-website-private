import DienstenNavbar from './DienstenNavbar'
import Footer from '@/components/Footer'
import clsx from 'clsx'
// import { Providers } from '@/app/providers'

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
            <body className="relative min-h-full bg-secondary-50 dark:bg-slate-900 max-w-[1920px] mx-auto">
                {/* <Providers> */}

                <div className='relative w-full z-50'>
                    <DienstenNavbar />
                </div>

                <main className='bg-gray-50'>
                    {children}
                </main>

                <Footer className={"max-w-[1920px] mx-auto"} />

                {/* </Providers> */}
            </body>
        </html>
    )
}
