import Link from 'next/link'
import { Button } from '@/components/Button'
import { Container } from '@/components/Container'
import { Logo } from '@/components/Logo'
import { ChevronRightIcon } from '@heroicons/react/24/solid'

export function Header() {
  return (
    <>
      <div className="fixed z-[9999] w-full bg-orange-600 py-3">
        <div className="mx-auto max-w-7xl text-white">
          <div className="mx-auto text-center">
            <a
              href="http://knowchat.ai/?utm_source=wppb&utm_medium=hellobar&utm_id=launch"
              rel="noopener"
              target="_blank"
              className="w-full text-white"
            >
              <span className="font-bold">Know my new product 🎉 </span> -{' '}
              <span className="font-bold underline">Knowchat AI</span> a ChatGPT
              powered chatbot trained on your website content. 🚀🚀🚀
            </a>
          </div>
        </div>
      </div>
      <header className="mt-12 py-10 sm:mt-7">
        <Container>
          <nav className="relative z-50 flex justify-between">
            <div className="flex items-center md:gap-x-12">
              <Link href="/" aria-label="Home">
                <Logo className="h-10 w-auto" />
              </Link>
            </div>
            <div className="flex items-center gap-x-5 md:gap-x-8">
              <Button href="/frost" color="orange">
                <span>New Frost Theme Generator</span>
                <ChevronRightIcon
                  className="-mr-1 ml-2 h-4 w-4"
                  aria-hidden="true"
                />
              </Button>
            </div>
          </nav>
        </Container>
      </header>
    </>
  )
}
