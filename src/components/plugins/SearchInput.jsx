'use client'

import { Input } from '@/components/ui/input'
import { MagnifyingGlassIcon } from '@heroicons/react/24/outline'

export function SearchInput({ value, onChange, isLoading }) {
  return (
    <div className="relative mb-4 w-full">
      <Input
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
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
  )
}
