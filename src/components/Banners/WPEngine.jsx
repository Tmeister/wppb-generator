import wpengine from '@/images/wp-engine-logo.jpg'
import Image from 'next/image'

export function WPEngine() {
  return (
    <div className="flex items-center space-x-3">
      <div className="h-20 w-20 flex-shrink-0 border">
        <Image src={wpengine} alt="WP Engine" />
      </div>
      <div className="text-slate-600">
        Get 4 months free on all shared hosting plans with code,{' '}
        <span className="font-bold">wpe4free</span>.{' '}
        <a
          className="text-blue-600"
          href="https://shareasale.com/r.cfm?b=2166413&u=1070513&m=41388&urllink=&afftrack="
        >
          Buy now!
        </a>
      </div>
    </div>
  )
}
