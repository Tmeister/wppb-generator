import { TopContributors } from '@/components/plugins/TopContributors'
import { TopAuthors } from '@/components/plugins/TopAuthors'
import { SimpleLayout } from '@/components/SimpleLayout'
import { PluginsAdditions } from '@/components/plugins/PluginsAdditions'

export const metadata = {
  title: 'WordPress Plugins Repository Metrics',
  description: 'hello world!',
}

export default function WordPressConstants() {
  return (
    <SimpleLayout title="WordPress Plugins Metrics">
      <div className="w-full max-w-6xl mx-auto space-y-6 px-4 sm:px-6">
        <PluginsAdditions />
        <div className="grid gap-6 sm:grid-cols-2">
          <TopAuthors />
          <TopContributors />
        </div>
      </div>
    </SimpleLayout>
  )
}
