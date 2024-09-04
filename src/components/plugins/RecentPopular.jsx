import { memo } from 'react'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from '@/components/ui/card'

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip'

const StarRating = memo(function StarRating({ rating }) {
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger>
          {Array.from({ length: 5 }, (_, i) => (
            <span className="text-wppblue-500" key={i}>
              {i < Math.round(rating / 20) ? '★' : '☆'}
            </span>
          ))}
        </TooltipTrigger>
        <TooltipContent>Actual rating: {rating / 20} / 5</TooltipContent>
      </Tooltip>
    </TooltipProvider>
  )
})

async function getTopRatedPlugins() {
  const baseUrl = process.env.NEXT_PUBLIC_PLUGINS_API_BASE_URL
  const response = await fetch(
    `${baseUrl}/plugins/recent-popular?per_page=15`,
    {
      next: { revalidate: 3600 },
    },
  )
  if (!response.ok) throw new Error('Failed to fetch plugins')
  const data = await response.json()
  return data.data
}

export async function RecentPopular() {
  const plugins = await getTopRatedPlugins()

  return (
    <Card className="rounded-sm">
      <CardHeader>
        <CardTitle className="text-xl">
          Rising Stars of WordPress Plugins
        </CardTitle>
        <CardDescription className="leading-normal">
          This list showcases newly added plugins that have quickly gained
          traction in the WordPress community. The list focus on plugins
          released within the last 6 months. The ranking system combines the
          number of active installations with user ratings to highlight plugins
          that are both widely adopted and highly regarded.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>#</TableHead>
              <TableHead className="">Name</TableHead>
              <TableHead className="w-[125px] text-center">
                Active Installs
              </TableHead>
              <TableHead className="w-[125px] text-center">Reviews</TableHead>
              <TableHead className="w-[125px] text-center">Rating</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {plugins.map((plugin, index) => (
              <TableRow key={plugin.plugin_slug}>
                <TableCell className="font-medium">{index + 1}</TableCell>
                <TableCell className="font-medium">
                  <a
                    href={`https://wordpress.org/plugins/${plugin.plugin_slug}/`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:underline"
                  >
                    <span className="w-[200px]">{plugin.plugin_name}</span>
                  </a>
                </TableCell>
                <TableCell className="text-center">
                  {plugin.active_installs.toLocaleString()}
                </TableCell>
                <TableCell className="text-center">
                  {plugin.current_num_ratings.toLocaleString()}
                </TableCell>
                <TableCell className="text-center">
                  <StarRating rating={plugin.current_rating} />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  )
}
