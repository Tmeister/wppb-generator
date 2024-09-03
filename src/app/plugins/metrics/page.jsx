import { TopContributors } from '@/components/plugins/TopContributors'
import { SimpleLayout } from '@/components/SimpleLayout'

export const metadata = {
  title: 'WordPress Plugins Repository Metrics',
  description: 'hello world!',
}

export default function WordPressConstants() {
  return (
    <SimpleLayout title="WordPress Plugins Metrics">
      <div className="mx-auto grid w-full max-w-6xl gap-6">
        <div className="grid gap-6 md:grid-cols-2">
          <TopContributors />
          <div>Box 3</div>
        </div>
      </div>
    </SimpleLayout>
  )
}
