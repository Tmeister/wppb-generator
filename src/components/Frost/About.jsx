import { Container } from '@/components/Container'
import frost from '@/images/frost.jpeg'
import Image from 'next/image'
import Link from 'next/link'

export function About() {
  return (
    <section
      id="secondary-features"
      aria-label="Features for simplifying everyday business tasks"
      className="pb-14 pt-20 sm:pb-20 sm:pt-32 lg:pb-32"
    >
      <Container>
        <div className="mx-auto max-w-7xl">
          <h2 className="text-center text-3xl tracking-tight text-slate-900 sm:text-4xl">
            Frost Theme
          </h2>
          <div className="mx-auto mt-20 space-y-10 px-4 text-lg tracking-tight text-slate-500 sm:px-6 md:max-w-2xl md:px-4 lg:max-w-5xl lg:px-12">
            <div className="space-y-10">
              <p>
                <Link
                  href="https://frostwp.com/"
                  target="_blank"
                  rel="noreferrer"
                  className="font-semibold text-blue-500 underline"
                >
                  Frost
                </Link>{' '}
                is an innovative and cutting-edge WordPress Full Site Editing
                theme (FSE) designed to provide website builders with
                unparalleled versatility and creative freedom. Developed by
                WPEngine, a leading managed hosting provider, Frost combines
                fresh patterns, endless layouts, and infinite design
                possibilities to create a comprehensive solution for agencies,
                small businesses, and individuals looking to build visually
                striking and highly functional websites.
              </p>
              <p>
                The theme boasts a clean, minimal design and a powerful feature
                set, enabling users to craft stylish and sophisticated websites
                easily. Frost is the brainchild of WPEngine, a company renowned
                for its expertise in managed hosting, eCommerce, and website
                solutions for businesses and agencies.
              </p>
            </div>
            <div>
              <Image
                src={frost}
                alt="Frost Theme"
                className="border border-slate-200"
              />
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}
