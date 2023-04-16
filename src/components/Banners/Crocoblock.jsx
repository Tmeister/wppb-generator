import crocoblock from '@/images/crocoblock.jpg'
import Image from 'next/image'

export function Crocoblock() {
  return (
    <a href="https://bit.ly/3GNscS7" className="flex items-center space-x-3">
      <div className="h-52 w-52 flex-shrink-0 border">
        <Image src={crocoblock} alt="Crocoblock" />
      </div>
    </a>
  )
}
