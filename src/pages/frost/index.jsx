import Head from 'next/head'

import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'
import { HeroFrost } from '@/components/Frost/Hero'
import { About } from '@/components/Frost/About'
import { Affiliates } from '@/components/Affiliates'

export default function Frost() {
  return (
    <>
      <Head>
        <title>Frost Started Theme Generator</title>
        <meta
          name="description"
          content="Frost starter theme generator, Stop wasting time searching and replacing text strings manually"
        />
        <meta
          name="robots"
          content="follow, index, max-snippet:-1, max-video-preview:-1, max-image-preview:large"
        />
        <link rel="canonical" href="https://wppb.me/frost" />
        <meta property="og:locale" content="en_US" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Frost Started Theme Generator" />
        <meta
          property="og:description"
          content="Frost starter theme generator, Stop wasting time searching and replacing text strings manually"
        />
        <meta property="og:url" content="https://wppb.me/frost" />
        <meta property="og:site_name" content="Frost Started Theme Generator" />
        <meta property="og:updated_time" content="2020-03-27T18:28:44-06:00" />
        <meta property="og:image" content="https://mugshotbot.com/m/nQfbypj2" />
        <meta
          property="og:image:secure_url"
          content="https://mugshotbot.com/m/nQfbypj2"
        />
        <meta property="og:image:alt" content="Frost Started Theme Generator" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Frost Stater Theme Generator" />
        <meta
          name="twitter:description"
          content="Frost starter theme generator, Stop wasting time searching and replacing text strings manually"
        />
        <meta
          name="twitter:image"
          content="https://mugshotbot.com/m/nQfbypj2"
        />
      </Head>
      <Header />
      <main>
        <HeroFrost />
        <About />
      </main>
      <Footer />
      <Affiliates />
    </>
  )
}
