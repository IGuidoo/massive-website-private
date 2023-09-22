import Navbar from '@/components/Navbar'
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
            <body className="min-h-full bg-white dark:bg-slate-900">
                {/* <Providers> */}
                
                <div className='relative w-full'>
                    <Navbar />
                    <div className="absolute bottom-0 w-full h-full -z-20 custom-bg-gradient"></div>
                </div>

                <main>
                    {children}
                </main>

                <Footer />

                {/* </Providers> */}
            </body>
        </html>
    )
}
