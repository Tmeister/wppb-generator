import { Providers } from '@/app/providers'
import { Layout } from '@/components/Layout'
import { Analytics } from '@vercel/analytics/react'

import '@/styles/tailwind.css'
import GoogleAnalytics from '@/app/google-analytics'

export const metadata = {
  title: {
    template: '%s - WordPress Plugin Boilerplate',
    default:
      'WordPress Plugin Boilerplate | A Foundation for Building High-Quality WordPress Plugins',
  },
  description:
    'WordPress Plugin Boilerplate Generator, Stop wasting time searching and replacing text strings manually',
  alternates: {
    types: {
      'application/rss+xml': `${process.env.NEXT_PUBLIC_SITE_URL}/feed.xml`,
    },
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="h-full antialiased" suppressHydrationWarning>
      <body className="flex h-full bg-zinc-50 dark:bg-black">
        <Analytics />
        <Providers>
          <div className="flex w-full">
            <Layout>
              <GoogleAnalytics />
              {children}
            </Layout>
          </div>
        </Providers>
      </body>
    </html>
  )
}
