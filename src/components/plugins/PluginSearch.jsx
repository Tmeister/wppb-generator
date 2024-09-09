'use client'

import { useState, useCallback, useEffect } from 'react'
import Image from 'next/image'
import debounce from 'lodash/debounce'
import { MagnifyingGlassIcon } from '@heroicons/react/24/outline'
import { Input } from '@/components/ui/input'
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from '@/components/ui/card'

export function PluginSearch() {
  const [searchTerm, setSearchTerm] = useState('')
  const [results, setResults] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState(null)
  const [selectedPlugin, setSelectedPlugin] = useState(null)

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

  const debouncedSearch = useCallback(
    debounce((term) => performSearch(term), 300),
    [],
  )

  const handleSearchChange = (e) => {
    const value = e.target.value
    setSearchTerm(value)
    debouncedSearch(value)
  }

  const loadPluginDetails = async (slug) => {
    setIsLoading(true)
    setError(null)
    setResults([])
    //   setSearchTerm('')
    try {
      const baseUrl = process.env.NEXT_PUBLIC_PLUGINS_API_BASE_URL
      const response = await fetch(`${baseUrl}/plugins/${slug}`)
      if (!response.ok) throw new Error('Failed to fetch plugin details')
      const data = await response.json()
      console.log('data', data)
      setSelectedPlugin(data.data)
    } catch (err) {
      setError(
        'An error occurred while loading plugin details. Please try again.',
      )
      console.error('Plugin details error:', err)
    } finally {
      console.log('finally')
      setIsLoading(false)
    }
  }

  useEffect(() => {
    return () => {
      debouncedSearch.cancel()
    }
  }, [debouncedSearch])

  return (
    <div>
      <Card className="rounded-sm">
        <CardHeader>
          <CardTitle className="text-xl">Plugin Search</CardTitle>
          <CardDescription>
            Search for WordPress plugins in the official repository.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="relative mb-4 w-full">
            <Input
              type="text"
              value={searchTerm}
              onChange={handleSearchChange}
              placeholder="Enter plugin name..."
              className="pr-10"
            />
            {isLoading ? (
              <span className="absolute right-3 top-1/2 -translate-y-1/2">
                Loading...
              </span>
            ) : (
              <MagnifyingGlassIcon className="absolute right-3 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-400" />
            )}
          </div>
          {error && <p className="mb-2 text-red-500">{error}</p>}
          {results.length > 0 && (
            <ul className="">
              {results.map((plugin) => (
                <li
                  key={plugin.slug}
                  className="flex cursor-pointer items-center border-b py-4 hover:bg-slate-50"
                  onClick={() => loadPluginDetails(plugin.slug)}
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
          )}
        </CardContent>
      </Card>
    </div>
  )
}
