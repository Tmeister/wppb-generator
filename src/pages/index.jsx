import Head from 'next/head'

import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'
import { Hero } from '@/components/Hero'
import { About } from '@/components/About'
import { Persons } from '@/components/Persons'

export default function Home() {
  return (
    <>
      <Head>
        <title>WordPress Plugin Boilerplate Generator | Ready to use WordPress Plugin Boilerplate</title>
        <meta
          name="description"
          content="WordPress Plugin Boilerplate Generator, Stop wasting time searching and replacing text strings manually"
        />
        <meta
          name="description"
          content="WordPress Plugin Boilerplate Generator, Stop wasting time searching and replacing text strings manually"
        />
        <meta name="robots" content="follow, index, max-snippet:-1, max-video-preview:-1, max-image-preview:large" />
        <link rel="canonical" href="https://wppb.me/" />
        <meta property="og:locale" content="en_US" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="WordPress Plugin Boilerplate Generator" />
        <meta
          property="og:description"
          content="WordPress Plugin Boilerplate Generator, Stop wasting time searching and replacing text strings manually"
        />
        <meta property="og:url" content="https://wppb.me/" />
        <meta property="og:site_name" content="WordPress Plugin Boilerplate Generator" />
        <meta property="og:updated_time" content="2020-03-27T18:28:44-06:00" />
        <meta property="og:image" content="https://mugshotbot.com/m/mlqFqFjl" />
        <meta property="og:image:secure_url" content="https://mugshotbot.com/m/mlqFqFjl" />
        <meta property="og:image:alt" content="WordPress Plugin Boilerplate" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="WordPress Plugin Boilerplate Generator" />
        <meta
          name="twitter:description"
          content="WordPress Plugin Boilerplate Generator, Stop wasting time searching and replacing text strings manually"
        />
        <meta name="twitter:image" content="https://mugshotbot.com/m/mlqFqFjl" />
      </Head>
      <Header />
      <main>
        <Hero />
        <About />
        <Persons />
      </main>
      <Footer />
    </>
  )
}
