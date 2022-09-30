import Link from 'next/link'

export function PluginPreview(props) {
  return (
    <section className="w-full lg:w-6/12">
      <div className="rounded-lg border border-slate-200 shadow-lg">
        <header className=" flex items-center rounded-t-lg border-b bg-slate-50 px-10 py-5 text-slate-600">
          <div className="h-6 w-6 rounded border border-slate-300 bg-white"></div>
          <div className="ml-3 font-semibold ">Plugin</div>
        </header>
        <main className="space-y-3 px-10 py-5">
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
            <Link href={`https://${props.data.authorUri}`} className="text-blue-600">
              By {props.data.authorName}
            </Link>
            <span className="text-slate-400">|</span>
            <Link href={`https://${props.data.pluginUri}`} className="text-blue-600">
              View Details
            </Link>
          </div>
          <div>
            <p className=" mt-5 cursor-pointer text-sm text-blue-600">Enable auto-updates</p>
          </div>
        </main>
      </div>
    </section>
  )
}
