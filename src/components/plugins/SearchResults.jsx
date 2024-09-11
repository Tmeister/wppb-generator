'use client'

import Image from 'next/image'

export function SearchResults({ results, onSelectPlugin }) {
  if (results.length === 0) return null

  return (
    <ul>
      {results.map((plugin) => (
        <li
          key={plugin.slug}
          className="flex cursor-pointer items-center border-b py-4 hover:bg-slate-50"
          onClick={() => onSelectPlugin(plugin.slug)}
        >
          {plugin.icon_url ? (
            <Image
              src={plugin.icon_url}
              alt={`${plugin.plugin_name} icon`}
              width={24}
              height={24}
              className="mr-4 rounded"
            />
          ) : (
            <div className="mr-4 h-6 w-6 rounded bg-gray-200"></div>
          )}
          <div className="flex w-full flex-col space-y-1 sm:space-y-0 md:flex-row md:items-center md:justify-between">
            <span className="w-full max-w-sm truncate font-semibold lg:max-w-3xl">
              {plugin.plugin_name}
            </span>
            <span className="truncate text-sm text-gray-600 md:text-base">
              {plugin.author}
            </span>
          </div>
        </li>
      ))}
    </ul>
  )
}
