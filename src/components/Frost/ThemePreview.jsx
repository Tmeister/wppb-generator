import Link from 'next/link'
import Image from 'next/image'
import buymeacoffee from '@/images/buy-me-a-coffee.png'
import { ChevronLeftIcon, ChevronRightIcon, XMarkIcon } from '@heroicons/react/24/solid'

export function ThemePreview(props) {
  return (
    <section className="w-full lg:w-6/12">
      <div className="border border-slate-200 shadow-lg">
        <header className="flex items-center justify-between border-b bg-white text-slate-600">
          <div className="flex">
            <div>
              <div className="border-r bg-white p-3">
                <ChevronLeftIcon className="h-5 w-5 text-slate-300" />
              </div>
            </div>
            <div>
              <div className="cursor-pointer border-r bg-white p-3 hover:bg-slate-200">
                <ChevronRightIcon className="h-5 w-5 text-slate-600" />
              </div>
            </div>
          </div>
          <div>
            <div className="cursor-pointer border-l bg-white p-3 hover:bg-slate-200">
              <XMarkIcon className="h-5 w-5 text-slate-600" />
            </div>
          </div>
        </header>
        <main className="space-y-3 px-10 py-5">
          <header className="flex items-baseline space-x-2">
            <h3 className="break-all text-3xl font-extralight">{props.data.name}</h3>
            <span className="text-xs">Version: 1.0.0</span>
          </header>
          <div className="">
            <span>By</span>{' '}
            <Link className="break-all text-blue-600 underline" href={`https://${props.data.authorURI}`}>
              {props.data.author}
            </Link>
          </div>
          <div>
            <p className="mt-4 break-all">{props.data.description}</p>
          </div>
          <hr />
          <div className="space-x-2 text-sm">
            <span className="font-bold">Tags:</span> block-patterns, block-styles, custom-colors, custom-logo,
            custom-menu, editor-style, full-site-editing, one-column, template-editing, threaded-comments,
            translation-ready, wide-blocks
          </div>
        </main>
      </div>
      {props.showBuyMeACoffe && (
        <div className="relative mt-10 flex justify-center">
          <Link href="https://www.buymeacoffee.com/tmeister" rel="noopener noreferrer" target="_blank">
            <Image width={250} height={70} src={buymeacoffee} alt="Buy Me a Coffee" />
          </Link>
        </div>
      )}
    </section>
  )
}
