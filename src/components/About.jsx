import { Container } from '@/components/Container'
import Link from 'next/link'

export function About() {
  return (
    <section id="developers" aria-label="About the generator" className="pt-20 pb-14 sm:pb-20 sm:pt-20 lg:pb-20">
      <Container>
        <div className="mx-auto max-w-7xl">
          <h2 className="text-center text-3xl tracking-tight text-slate-900 sm:text-4xl">About the generator</h2>
          <div className="prose mx-auto mt-12 px-4 text-lg text-slate-500 sm:px-6 md:max-w-2xl md:px-4 lg:max-w-5xl lg:px-12">
            <p className="mt-4">
              Hi, I&apos;m{' '}
              <Link
                className="font-semibold text-blue-500"
                href="https://enriquechavez.co?utm_source=wp-plugin-boilerplate&utm_medium=referral&utm_campaign=wp-plugin-boilerplate"
                target="_blank"
                rel="noreferrer"
              >
                Enrique Chávez
              </Link>
              , and as a WordPress Developer, I’ve been using the fantastic Tom McFarlin&apos;s{' '}
              <Link className="font-semibold" href="https://github.com/devinvinson/WordPress-Plugin-Boilerplate/">
                WPPB foundation plugin
              </Link>{' '}
              (now maintained by Devin Vinson) as my started plugin.
            </p>
            <p className="mt-4">
              Whenever I start working on a new plugin, I rename file names, search and replace{' '}
              <strong>plugin-name, Plugin_Name</strong>, the packages, sub-packages names, etc. All these tasks take me
              around 5-10 minutes every time, and I don’t particularly appreciate repeating unnecessary tasks.
            </p>
            <p className="mt-4">
              At that time, I was trying to work with NodeJS on an actual project, and this was an excellent opportunity
              to do it. A small and personal project, So I spent about 3 hours in the core builder and 2 hours on the
              homepage, and my little weekend project saw the light on November 16, 2014.
            </p>
            <p className="mt-4">
              <strong>September 2022 update:</strong> Eight years later, the new generator version is made with{' '}
              <Link className="font-semibold" href="https://nextjs.org/" target="_blank" rel="noreferrer">
                Next.js
              </Link>
              , hosted on{' '}
              <Link className="font-semibold" href="https://vercel.com/" rel="noreferrer" target="_blank">
                Vercel
              </Link>{' '}
              <i>(bye, Heroku)</i>, and the generator uses serverless functions.
            </p>
          </div>
        </div>
      </Container>
    </section>
  )
}
