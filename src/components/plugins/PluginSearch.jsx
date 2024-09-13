'use client'

import { useCallback, useState } from 'react'
import debounce from 'lodash/debounce'

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from '@/components/ui/card'

import {
  Combobox,
  ComboboxButton,
  ComboboxInput,
  ComboboxOption,
  ComboboxOptions,
} from '@headlessui/react'
import { CheckIcon } from '@heroicons/react/20/solid'
import { MagnifyingGlassIcon, ClockIcon } from '@heroicons/react/24/outline'
import { PluginDetails } from '@/components/plugins/PluginDetails'

export function PluginSearch() {
  const [query, setQuery] = useState('')
  const [results, setResults] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  const [selectedPlugin, setSelectedPlugin] = useState(null)
  const [error, setError] = useState(null)
  const [pluginDetails, setPluginDetails] = useState(null)
  const debouncedSearch = useCallback(
    debounce((term) => performSearch(term), 300),
    [],
  )

  const performSearch = async (term) => {
    if (!term.trim() || term.trim().length < 2) {
      setResults([])
      return
    }

    setIsLoading(true)
    setError(null)

    try {
      const baseUrl = process.env.NEXT_PUBLIC_PLUGINS_API_BASE_URL
      const response = await fetch(
        `${baseUrl}/plugins/search?query=${encodeURIComponent(term)}`,
      )
      if (!response.ok) throw new Error('Failed to fetch search results')
      const data = await response.json()
      setResults(data.data || [])
    } catch (err) {
      setError('An error occurred while searching. Please try again.')
      console.error('Search error:', err)
    } finally {
      setIsLoading(false)
    }
  }

  const loadPluginDetails = async (plugin) => {
    if (!plugin) return
    setQuery('')
    setSelectedPlugin(plugin)
    const baseUrl = process.env.NEXT_PUBLIC_PLUGINS_API_BASE_URL
    const response = await fetch(`${baseUrl}/plugins/${plugin.slug}`)
    if (!response.ok) throw new Error('Failed to fetch plugin details')
    const data = await response.json()
    setPluginDetails(data?.data)
    setResults([])
  }

  const handleSearchChange = (value) => {
    setQuery(value)
    debouncedSearch(value)
  }

  return (
    <div className="space-y-16">
      <Card className="rounded-sm">
        <CardHeader>
          <CardTitle className="text-xl">Plugin Search</CardTitle>
          <CardDescription>
            Search for WordPress plugins in the official repository.
          </CardDescription>
        </CardHeader>
        <CardContent>
          {' '}
          <Combobox
            as="div"
            value={selectedPlugin}
            onChange={loadPluginDetails}
          >
            <p className="sr-only">Search for plugins</p>
            <div className="relative mt-2">
              <ComboboxInput
                className="w-full rounded-md border-0 bg-white py-1.5 pl-3 pr-12 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-wppblue-500 sm:text-sm sm:leading-6"
                onChange={(event) => handleSearchChange(event.target.value)}
                onBlur={() => setQuery('')}
                displayValue={(plugin) => plugin?.name}
              />
              <ComboboxButton className="absolute inset-y-0 right-0 flex items-center rounded-r-md px-2 focus:outline-none">
                {isLoading ? (
                  <ClockIcon className="h-5 w-5 text-gray-400" />
                ) : (
                  <MagnifyingGlassIcon
                    className="h-5 w-5 text-gray-400"
                    aria-hidden="true"
                  />
                )}
              </ComboboxButton>
              {results.length > 0 && (
                <ComboboxOptions className="absolute z-10 mt-1 max-h-56 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                  {results.map((plugin) => (
                    <ComboboxOption
                      key={plugin.slug}
                      value={plugin}
                      className="group relative cursor-default select-none py-2 pl-3 pr-9 text-gray-900 data-[focus]:bg-wppblue-500 data-[focus]:text-white"
                    >
                      <div className="flex items-center">
                        {plugin.icon_url ? (
                          <img
                            src={plugin.icon_url}
                            alt={`${plugin.plugin_name}`}
                            className="h-6 w-6 flex-shrink-0 rounded-full"
                          />
                        ) : (
                          <div className="h-6 w-6 flex-shrink-0 rounded-full bg-gray-300" />
                        )}

                        <span className="ml-3 truncate group-data-[selected]:font-semibold">
                          {plugin.plugin_name}
                        </span>
                      </div>

                      <span className="absolute inset-y-0 right-0 hidden items-center pr-4 text-wppblue-500 group-data-[selected]:flex group-data-[focus]:text-white">
                        <CheckIcon className="h-5 w-5" aria-hidden="true" />
                      </span>
                    </ComboboxOption>
                  ))}
                </ComboboxOptions>
              )}
            </div>
          </Combobox>
          {error && <p className="text-red-500">{error}</p>}
          {pluginDetails && <PluginDetails plugin={pluginDetails} />}
        </CardContent>
      </Card>
    </div>
  )
}
