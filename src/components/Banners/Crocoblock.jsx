import crocoblock from '@/images/crocoblock.jpg'
import Image from 'next/image'

export function Crocoblock() {
  return (
    <a
      href="https://76.digital/crocoblock"
      className="flex items-center space-x-3"
    >
      <div className="h-48 w-48 flex-shrink-0 border">
        <Image src={crocoblock} alt="Crocoblock" />
      </div>
    </a>
  )
}
