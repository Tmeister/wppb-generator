import wprocket from '@/images/wp-rocket.png'
import Image from 'next/image'

export function WPRocket() {
  return (
    <a href="https://bit.ly/3GLTQi4" className="flex items-center space-x-3">
      <div className="h-52 w-52 flex-shrink-0 border">
        <Image src={wprocket} alt="WP Rocket" />
      </div>
    </a>
  )
}
