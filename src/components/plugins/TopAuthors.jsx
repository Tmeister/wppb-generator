import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import Link from 'next/link'
import Image from 'next/image'

async function getTopContributors() {
  const API_BASE_URL = process.env.NEXT_PUBLIC_PLUGINS_API_BASE_URL
  const api_url = `${API_BASE_URL}/authors/prolific?per_page=5`
  const res = await fetch(api_url, {
    next: { revalidate: 3600 },
  })

  if (!res.ok) throw new Error('Failed to fetch top contributors')
  return res.json()
}

export async function TopAuthors() {
  const response = await getTopContributors()

  return (
    <Card className="rounded-sm">
      <CardHeader>
        <CardTitle className="text-xl">Top Authors</CardTitle>
        <CardDescription className="leading-normal">
          These accounts have published plugins in the WordPress repository.
          Unlike contributors who may work on various plugins, authors are the
          primary creators and maintainers of their own plugins.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div>
          {response &&
            response.data?.map((contributor) => (
              <Link
                href={contributor.profile_url}
                target="_blank"
                rel="noopener noreferrer"
                key={contributor.id}
                className="flex items-center rounded p-3 hover:bg-slate-50"
              >
                <div className="flex items-center gap-2">
                  {contributor.avatar_url ? (
                    <Image
                      src={contributor.avatar_url}
                      alt={`Avatar of ${contributor.name}`}
                      width={32}
                      height={32}
                      className="rounded-full object-cover"
                    />
                  ) : (
                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-gray-200">
                      {contributor.name.charAt(0)}
                    </div>
                  )}
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
    </Card>
  )
}
