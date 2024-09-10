'use client'

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from '@/components/ui/card'
import { SearchInput } from './SearchInput'
import { SearchResults } from './SearchResults'
import { PluginDetails } from './PluginDetails'
import { usePluginSearch } from '@/hooks/usePluginSearch'

export function PluginSearch() {
  const {
    searchTerm,
    results,
    isLoading,
    error,
    selectedPlugin,
    handleSearchChange,
    loadPluginDetails,
    setSelectedPlugin,
  } = usePluginSearch()

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
          <SearchInput
            value={searchTerm}
            onChange={handleSearchChange}
            isLoading={isLoading}
          />
          {error && <p className="mb-2 text-red-500">{error}</p>}
          <SearchResults results={results} onSelectPlugin={loadPluginDetails} />
        </CardContent>
      </Card>
      {selectedPlugin && (
        <PluginDetails
          plugin={selectedPlugin}
          onClose={() => setSelectedPlugin(null)}
        />
      )}
    </div>
  )
}
