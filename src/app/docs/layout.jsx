import { Providers } from '@/app/providers'
import { Layout } from '@/app/docs/_components/Layout'

import '@/styles/tailwind.css'


export const metadata = {
  title: {
    template: '%s - Docs',
    default: 'CacheAdvance - Never miss the cache again.',
  },
  description:
    'Cache every single thing your app could ever do ahead of time, so your code never even has to run at all.',
}

export default function RootLayout({ children }) {
  return (

        <Providers>
          <Layout>{children}</Layout>
        </Providers>

  )
}
