import Link from 'next/link'
import { Button } from '@/components/Button'
import { Container } from '@/components/Container'
import { Logo } from '@/components/Logo'
import { ChevronRightIcon } from '@heroicons/react/24/solid'

export function Header() {
  return (
    <header className="py-10">
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
              <ChevronRightIcon className="-mr-1 ml-2 h-4 w-4" aria-hidden="true" />
            </Button>
          </div>
        </nav>
      </Container>
    </header>
  )
}
