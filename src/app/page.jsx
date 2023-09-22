import Image from 'next/image'

import logoX from '@/images/logos/x.svg'
import logoGithub from '@/images/logos/github.svg'
import logoLinkedin from '@/images/logos/linkedin.svg'
import logoWordPress from '@/images/logos/wordpress.svg'
import logo76 from '@/images/logos/76.svg'

import { Newsletter } from '@/components/Newsletter'
import { Card } from '@/components/Card'
import { Container } from '@/components/Container'
import { getAllArticles } from '@/lib/articles'
import { formatDate } from '@/lib/formatDate'
import { Hero } from '@/components/Hero'
import { GlobeAltIcon, EnvelopeIcon } from '@heroicons/react/24/outline'

function Article({ article }) {
  return (
    <Card as="article">
      <Card.Title href={`/articles/${article.slug}`}>
        {article.title}
      </Card.Title>
      <Card.Eyebrow as="time" dateTime={article.date} decorate>
        {formatDate(article.date)}
      </Card.Eyebrow>
      <Card.Description>{article.description}</Card.Description>
      <Card.Cta>Read article</Card.Cta>
    </Card>
  )
}

function Role({ role }) {
  return (
    <li className="">
      <a
        href={role.title}
        target="_blank"
        className="hover:bg-slate-50 w-full flex gap-4"
      >
        <div
          className="relative mt-1 flex h-10 w-10 flex-none items-center justify-center rounded-full shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5 dark:border dark:border-zinc-700/50 
        dark:bg-zinc-800 dark:ring-0"
        >
          <Image src={role.logo} alt="" className="h-7 w-7" unoptimized />
        </div>
        <dl className="flex flex-auto flex-wrap gap-x-2">
          <dt className="sr-only">name</dt>
          <dd className="w-full flex-none text-sm font-medium text-zinc-900 dark:text-zinc-100">
            {role.name}
          </dd>
          <dt className="sr-only">url</dt>
          <dd className="text-xs text-zinc-500 dark:text-zinc-400">
            {role.title}
          </dd>
        </dl>
      </a>
    </li>
  )
}

function Social() {
  let networks = [
    {
      name: 'Github',
      title: 'https://github.com/tmeister',
      logo: logoGithub,
    },
    {
      name: 'X (Twitter)',
      title: 'https://x.com/tmeister',
      logo: logoX,
    },
    {
      name: 'WordPress',
      title: 'https://profiles.wordpress.org/tmeister/',
      logo: logoWordPress,
    },
    {
      name: 'LinkedIn',
      title: 'https://www.linkedin.com/in/enrique-chavez',
      logo: logoLinkedin,
    },
    {
      name: '76 Digital',
      title: 'https://76.digital',
      logo: logo76,
    },
  ]

  return (
    <div className="rounded-2xl border border-zinc-100 p-6 dark:border-zinc-700/40">
      <h2 className="flex text-sm font-semibold text-zinc-900 dark:text-zinc-100">
        <GlobeAltIcon className="h-6 w-6 flex-none text-gray-400" />
        <span className="ml-3">My Links</span>
      </h2>
      <ol className="mt-6 space-y-4">
        {networks.map((role, roleIndex) => (
          <Role key={roleIndex} role={role} />
        ))}
      </ol>
    </div>
  )
}

export default async function Home() {
  let articles = (await getAllArticles()).slice(0, 4)

  return (
    <>
      <Container className="mt-9">
        <div className="max-w-7xl mt-20">
          <Hero />
        </div>
      </Container>
      <Container className="mt-24 md:mt-28">
        <div className="mx-auto grid max-w-xl grid-cols-1 gap-y-20 lg:max-w-none lg:grid-cols-2">
          <div className="flex flex-col gap-16">
            {articles.map((article) => (
              <Article key={article.slug} article={article} />
            ))}
          </div>
          <div className="space-y-10 lg:pl-16 xl:pl-24">
            <Newsletter />
            <Social />
          </div>
        </div>
      </Container>
    </>
  )
}
