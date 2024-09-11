import { TopContributors } from '@/components/plugins/TopContributors'
import { TopAuthors } from '@/components/plugins/TopAuthors'
import { SimpleLayout } from '@/components/SimpleLayout'
import { PluginsAdditions } from '@/components/plugins/PluginsAdditions'
import { TopRatedPlugins } from '@/components/plugins/TopRatedPlugins'
import { RecentPopular } from '@/components/plugins/RecentPopular'
// import { PluginSearch } from '@/components/plugins/PluginSearch'

export const metadata = {
  title:
    'WordPress Plugin Metrics: Top Rated, Rising Stars & Repository Trends',
  description:
    'Explore comprehensive WordPress plugin metrics, including top-rated plugins, rising stars, and repository trends. Get insights into the WordPress ecosystem for developers and site owners.',
}

async function getPluginsTotal() {
  const baseUrl = process.env.NEXT_PUBLIC_PLUGINS_API_BASE_URL
  const res = await fetch(`${baseUrl}/plugins/total`, {
    next: { revalidate: 0 },
  })
  if (!res.ok) {
    throw new Error('Failed to fetch plugins total')
  }
  return res.json()
}

export default async function WordPressConstants() {
  const pluginsData = await getPluginsTotal()

  return (
    <SimpleLayout title="WordPress Plugin Repository Insights: Trends, Rankings, and Analytics">
      <div className="mx-auto w-full">
        <div className="prose mb-16 max-w-none">
          <p>
            The WordPress Plugin Repository stands as a cornerstone of the
            world&apos;s most popular content management system, offering a vast
            array of tools that extend and enhance WordPress functionality. The
            WordPress Plugin Repository Insights page serves as a new resource
            for developers, website owners, and WordPress enthusiasts alike,
            providing a data-driven window into this dynamic ecosystem.
          </p>

          <p>
            This page tries to uncover the shifting landscape of WordPress
            development. The lists spotlight rising stars - newly released
            plugins that have quickly gained traction - alongside established
            powerhouses that continue to dominate the field. These insights
            offer invaluable guidance for those seeking cutting-edge solutions
            or tried-and-true tools to elevate their WordPress projects.
          </p>

          <p>
            Beyond individual plugin metrics, the page provides comprehensive
            visualizations and statistics that paint a broader picture of the
            WordPress plugin ecosystem as a whole. By tracking repository growth
            and highlighting top contributors and authors, we provide a unique
            perspective on the collaborative nature of WordPress development.
          </p>

          <p>
            This wealth of information empowers users to make informed
            decisions, helps developers target unmet needs, and offers
            researchers and industry analysts deep insights into the evolving
            world of WordPress plugins.
          </p>

          <p>
            The data is sourced from the public{' '}
            <a
              href="https://codex.wordpress.org/WordPress.org_API#Plugins"
              target="_blank"
              rel="noopener noreferrer"
              className="text-wppblue-500"
            >
              WordPress Plugin Repository API{' '}
            </a>
            and is <strong>updated daily</strong>.
          </p>

          <p className="">
            This is the first iteration of the page. I plan to add more
            information over time and evaluating if this could be converted into
            a service where user can access and query the data if you are
            interested or want to suggest charts or information you would like
            to see, please let me know{' '}
            <a
              href="https://x.com/tmeister"
              target="_blank"
              rel="noopener noreferrer"
              className="text-wppblue-500"
            >
              @Tmeister
            </a>
            .
          </p>

          <p>
            As of today, there are{' '}
            <strong>{pluginsData.total_plugins.toLocaleString()}</strong>{' '}
            plugins in the database. The last update was on{' '}
            <strong>
              {new Date(pluginsData.last_updated).toLocaleString('en-US', {
                month: 'long',
                day: 'numeric',
                year: 'numeric',
                hour: 'numeric',
                minute: 'numeric',
                hour12: true,
              })}
            </strong>{' '}
            (GMT-6).
          </p>
        </div>
        <div className="space-y-16">
          <PluginsAdditions />
          <TopRatedPlugins />
          <RecentPopular />
          <div className="grid gap-6 sm:grid-cols-2">
            <TopAuthors />
            <TopContributors />
          </div>
        </div>
      </div>
    </SimpleLayout>
  )
}
