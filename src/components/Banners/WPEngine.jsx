import wpengine from '@/images/wp-engine-logo.jpg'
import Image from 'next/image'

export function WPEngine() {
  return (
    <a
      href="https://76.digital/wp-engine"
      className="flex items-center space-x-3"
    >
      <div className="h-20 w-20 flex-shrink-0 border">
        <Image src={wpengine} alt="WP Engine" />
      </div>
      <div className="text-slate-600">
        Get 4 months free on all the{' '}
        <span className="font-bold">WP Engine</span> shared hosting plans with
        code, <span className="font-bold">wpe4free</span>.{' '}
      </div>
    </a>
  )
}
