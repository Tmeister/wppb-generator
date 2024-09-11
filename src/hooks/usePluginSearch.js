'use client'

import { useState, useCallback, useEffect } from 'react'
import debounce from 'lodash/debounce'

export function usePluginSearch() {
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

  const handleSearchChange = (value) => {
    setSearchTerm(value)
    debouncedSearch(value)
  }

  const loadPluginDetails = async (slug) => {
    setIsLoading(true)
    setError(null)
    setResults([])
    setSearchTerm('')
    console.log('Loading plugin details for:', slug)
    try {
      const baseUrl = process.env.NEXT_PUBLIC_PLUGINS_API_BASE_URL
      const response = await fetch(`${baseUrl}/plugins/${slug}`)
      if (!response.ok) throw new Error('Failed to fetch plugin details')
      const data = await response.json()
      console.log('Plugin details:', data.data)
      setSelectedPlugin(data.data)
    } catch (err) {
      setError(
        'An error occurred while loading plugin details. Please try again.',
      )
      console.error('Plugin details error:', err)
    } finally {
      setIsLoading(false)
    }
  }

  useEffect(() => {
    return () => {
      debouncedSearch.cancel()
    }
  }, [debouncedSearch])

  return {
    searchTerm,
    results,
    isLoading,
    error,
    selectedPlugin,
    handleSearchChange,
    loadPluginDetails,
    setSelectedPlugin,
  }
}
