import Image from 'next/image'
import Link from 'next/link'
import clsx from 'clsx'

import { Container } from '@/components/Container'
import { GitHubIcon, LinkedInIcon, TwitterIcon } from '@/components/SocialIcons'
import portraitImage from '@/images/avatar-ec-1.jpg'
import { EnvelopeIcon } from '@heroicons/react/24/solid'

function SocialLink({ className, href, children, icon: Icon }) {
  return (
    <li className={clsx(className, 'flex')}>
      <Link
        href={href}
        className="group flex text-sm font-medium text-zinc-800 transition hover:text-blue-500 dark:text-zinc-200 dark:hover:text-blue-500"
      >
        <Icon className="h-6 w-6 flex-none fill-zinc-500 transition group-hover:fill-blue-500" />
        <span className="ml-4">{children}</span>
      </Link>
    </li>
  )
}

export const metadata = {
  title: 'About',
  description: 'About WordPress Plugin Boilerplate Generator',
}

export default function About() {
  return (
    <Container className="mt-16 sm:mt-32">
      <div className="grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:grid-rows-[auto_1fr] lg:gap-y-12">
        <div className="lg:pl-20">
          <div className="max-w-xs px-2.5 lg:max-w-none">
            <Image
              src={portraitImage}
              alt="Enrique Chavez"
              sizes="(min-width: 1024px) 32rem, 20rem"
              className="aspect-square rotate-3 rounded-2xl bg-zinc-100 object-cover dark:bg-zinc-800"
            />
          </div>
        </div>
        <div className="lg:order-first lg:row-span-2">
          <h1 className="text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl">
            The history about the WordPress Plugin Boilerplate generator
          </h1>
          <div className="mt-6 space-y-7 prose prose-a:text-wppblue-500 prose-a:decoration-wppblue-500 dark:prose-invert">
            <p>
              Hi, I&apos;m <strong>Enrique Chávez</strong>, and as a WordPress
              Developer, I’ve been using the fantastic Tom McFarlin&apos;s{' '}
              <a href="https://github.com/devinvinson/WordPress-Plugin-Boilerplate/">
                WPPB foundation plugin
              </a>
              (now maintained by Devin Vinson) as my started plugin.
            </p>

            <p>
              Whenever I start working on a new plugin, I rename file names,
              search and replace <strong>plugin-name</strong>,{' '}
              <strong>Plugin_Name</strong>, the packages, sub-packages names,
              etc. All these tasks take me around 5-10 minutes every time, and I
              don’t particularly appreciate repeating unnecessary tasks.
            </p>
            <p>
              At that time, I was trying to work with NodeJS on an actual
              project, and this was an excellent opportunity to do it. A small
              and personal project, So I spent about 3 hours in the core builder
              and 2 hours on the homepage, and my little weekend project saw the
              light on November 16, 2014.
            </p>
            <p>
              <strong>September 2022 update:</strong> Eight years later, the new
              generator version is made with{' '}
              <a href="https://nextjs.org/">Next.js</a>, hosted on{' '}
              <a href="https://vercel.com/">Vercel</a> (bye, Heroku), and the
              generator uses serverless functions.
            </p>
          </div>
        </div>
        <div className="lg:pl-20">
          <ul role="list">
            <SocialLink href="https://x.com/tmeister" icon={TwitterIcon}>
              Follow on Twitter
            </SocialLink>
            <SocialLink
              href="https://github.com/tmeister"
              icon={GitHubIcon}
              className="mt-4"
            >
              Follow on GitHub
            </SocialLink>
            <SocialLink
              href="https://www.linkedin.com/in/enrique-chavez"
              icon={LinkedInIcon}
              className="mt-4"
            >
              Follow on LinkedIn
            </SocialLink>
            <SocialLink
              href="mailto:tmeister@gmail.com"
              icon={EnvelopeIcon}
              className="mt-8 border-t border-zinc-100 pt-8 dark:border-zinc-700/40"
            >
              tmeister@gmail.com
            </SocialLink>
          </ul>
        </div>
      </div>
    </Container>
  )
}
