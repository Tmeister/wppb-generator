import Image from 'next/image'
import smallAvatar from '@/images/avatar-ec-small.jpg'

export function BioCard() {
  return (
    <div className="max-w-2xl mx-auto sm:items-center sm:flex border-t-2 border-zinc-100 dark:border-zinc-800 pt-6 mt-12">
      {smallAvatar && (
        <Image
          alt="Enrique Chavez"
          className="w-20 h-20 mx-auto mb-10 rounded-full sm:mr-10 ring ring-wppblue-500 ring-offset-4 ring-offset-white dark:ring-offset-zinc-700 sm:mb-0"
          src={smallAvatar}
        />
      )}

      <div className="text-sm">
        <p className="w-full mb-5 font-semibold text-center text-zinc-600 dark:text-zinc-300 sm:text-left sm:mb-3">
          Written by{' '}
          <strong>
            <a href="https://x.com/tmeister">Enrique Chavez</a>
          </strong>
        </p>

        <p className="text-center sm:text-justify text-zinc-600 dark:text-zinc-400">
          I&apos;m a passionate full-stack developer who&apos;s been immersed in
          the tech world for nearly two decades. Over the years, I genuinely
          enjoy sharing top-notch WordPress guides and tips with fellow
          enthusiasts.
        </p>
      </div>
    </div>
  )
}
