import ProjectTest from '@/components/navbar/MegaDropdown'
import DienstenNavbar from './DienstenNavbar'
import Footer from '@/components/sections/Footer'
import clsx from 'clsx'
import ResponsiveNavbar from '@/components/navbar/ResponsiveNavbar'
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
            <body>
                {/* <Providers> */}

                {/* <div className='relative w-full z-50'>
                    <DienstenNavbar />
                </div> */}

                <ResponsiveNavbar />

                <main className='bg-gray-50'>
                    {children}
                </main>

                <Footer className={"max-w-[1920px] mx-auto"} />

                {/* </Providers> */}
            </body>
        </html>
    )
}
