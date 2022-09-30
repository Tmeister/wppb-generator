import Link from 'next/link'
import { Button } from '@/components/Button'
import { Container } from '@/components/Container'
import { Logo } from '@/components/Logo'

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
            <Button href="https://github.com/Tmeister/wppb-generator" target="_blank" rel="noreferrer" color="blue">
              <span>Support the generator</span>
            </Button>
          </div>
        </nav>
      </Container>
    </header>
  )
}
