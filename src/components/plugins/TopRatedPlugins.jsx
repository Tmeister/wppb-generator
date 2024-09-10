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

import { StarRating } from '@/components/StarRating'

async function getTopRatedPlugins() {
  const baseUrl = process.env.NEXT_PUBLIC_PLUGINS_API_BASE_URL
  const response = await fetch(
    `${baseUrl}/plugins/high-download-high-rating?per_page=15`,
    {
      next: { revalidate: 3600 },
    },
  )
  if (!response.ok) throw new Error('Failed to fetch plugins')
  const data = await response.json()
  return data.data
}

export async function TopRatedPlugins() {
  const plugins = await getTopRatedPlugins()

  return (
    <Card className="rounded-sm">
      <CardHeader>
        <CardTitle className="text-xl">Top Rated Plugins</CardTitle>
        <CardDescription className="leading-normal">
          This list showcases top WordPress plugins based on a combination of
          factors: the number of reviews, average rating, and active
          installations.
          <br />
          These plugins have demonstrated high user satisfaction and widespread
          adoption in the WordPress community.
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
                  {plugin.max_active_installs.toLocaleString()}
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
