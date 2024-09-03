'use client'

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'

import { useApiData } from '@/lib/hooks/useApiData'
import Link from 'next/link'

export function TopContributors() {
  const { data, loading, error } = useApiData('/contributors/prolific', {
    per_page: 5,
  })

  console.log(data)

  return (
    <Card className="bg- rounded-sm">
      <CardHeader>
        <CardTitle className="text-xl">Top Contributors</CardTitle>
        <CardDescription className="leading-snug">
          These individuals have significantly contributed to the WordPress
          ecosystem, contributing to multiple plugins in the official
          repository.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="">
          {loading && <p>Loading...</p>}
          {error && <p>Error: {error.message}</p>}
          {data?.data?.map((contributor) => (
            <Link
              href={contributor.profile_url}
              target="_blank"
              rel="noopener noreferrer"
              key={contributor.id}
              className="flex items-center p-3 hover:bg-slate-50"
            >
              <div className="flex items-center gap-2">
                <img
                  src={contributor.avatar_url || '/placeholder.svg'}
                  alt="Avatar"
                  width={32}
                  height={32}
                  className="rounded-full"
                  style={{ aspectRatio: '32/32', objectFit: 'cover' }}
                />
                <div>
                  <div className="font-semibold">{contributor.name}</div>
                  <div className="text-muted-foreground">
                    {contributor.display_name}
                  </div>
                </div>
              </div>
              <div className="m-0 ml-auto">
                <span className="font-semibold">
                  {contributor.plugins_count}
                </span>{' '}
                plugins
              </div>
            </Link>
          ))}
        </div>
      </CardContent>
      <CardFooter className="bg-red-30 flex justify-between">Footer</CardFooter>
    </Card>
  )
}
