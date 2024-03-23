import Link from 'next/link'
import Image from 'next/image'
import buymeacoffee from '@/images/buy-me-a-coffee.png'

export function PluginPreview(props) {
  return (
    <section className="w-full lg:w-6/12">
      <div className="rounded-lg border border-slate-200 shadow-lg dark:border-zinc-700 ">
        <header className="flex items-center rounded-t-lg border-b bg-slate-50 px-10 py-5 text-slate-600 dark:border-zinc-700 dark:bg-zinc-700/[0.3] dark:text-white ">
          <div className="h-6 w-6 rounded border border-slate-300 bg-white dark:border-zinc-700 dark:bg-zinc-700/[0.3]"></div>
          <div className="ml-3 font-semibold ">Plugin</div>
        </header>
        <main className="space-y-3 px-10 py-5 dark:bg-zinc-700/[0.3] ">
          <h3 className="text-xl font-bold">{props.data.pluginName}</h3>
          <div className="space-x-2 text-sm">
            <span className="cursor-pointer text-blue-600">Activate</span>
            <span className="text-slate-400">|</span>
            <span className="cursor-pointer text-red-600">Delete</span>
          </div>
          <div>
            <p className="mt-4 text-sm">{props.data.pluginDescription}</p>
          </div>
          <div className="space-x-2 text-sm">
            <span>Version 1.0.0</span>
            <span className="text-slate-400">|</span>
            <Link
              href={`https://${props.data.authorUri || 'example.com'}`}
              className="text-blue-600"
            >
              By {props.data.authorName}
            </Link>
            <span className="text-slate-400">|</span>
            <Link
              href={`https://${props.data.pluginUri || 'example.com'}`}
              className="text-blue-600"
            >
              View Details
            </Link>
          </div>
          <div>
            <p className="mt-5 cursor-pointer text-sm text-blue-600 ">
              Enable auto-updates
            </p>
          </div>
        </main>
      </div>
      {props.showBuyMeACoffe && (
        <div className="relative mt-10 flex justify-center">
          <Link
            href="https://www.buymeacoffee.com/tmeister"
            rel="noopener noreferrer"
            target="_blank"
          >
            <Image
              width={250}
              height={70}
              src={buymeacoffee}
              alt="Buy Me a Coffee"
            />
          </Link>
        </div>
      )}
    </section>
  )
}
