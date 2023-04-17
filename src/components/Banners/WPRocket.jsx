import wprocket from '@/images/wp-rocket.png'
import Image from 'next/image'

export function WPRocket() {
  return (
    <a
      href="https://76.digital/wp-rocket"
      className="flex items-center space-x-3"
    >
      <div className="h-48 w-48 flex-shrink-0 border">
        <Image src={wprocket} alt="WP Rocket" />
      </div>
    </a>
  )
}
