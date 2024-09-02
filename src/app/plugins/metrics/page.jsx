import { SimpleLayout } from '@/components/SimpleLayout'

export const metadata = {
  title: 'WordPress Plugins Repository Metrics',
  description: 'hello world!',
}

export default function WordPressConstants() {
  return (
    <SimpleLayout title="WordPress Plugins Metrics">
      <div className="mx-auto grid w-full max-w-6xl gap-6 bg-red-100">
        <div className="grid gap-6 md:grid-cols-3">
          <div>Box 1</div>
          <div>Box 2</div>
          <div>Box 3</div>
          <div>Box 4</div>
          <div>Box 5</div>
        </div>
      </div>
    </SimpleLayout>
  )
}
