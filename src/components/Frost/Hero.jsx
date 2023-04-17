import { Container } from '@/components/Container'
import Form from '@/components/Frost/Form'
import { ThemePreview } from '@/components/Frost/ThemePreview'
import { useState } from 'react'

export function HeroFrost() {
  const defaultFormData = {
    name: 'Frost',
    author: 'WP Engine',
    authorURI: 'wpengine.com',
    description:
      'With its clean, minimal design and powerful feature set, Frost enables agencies to build stylish and sophisticated WordPress websites.',
  }

  const [data, setData] = useState(defaultFormData)
  const [showBuyMeACoffe, setShowBuyMeACoffe] = useState(false)

  const updateData = (newData) => {
    setData({ ...data, ...newData })
  }

  const onSubmit = () => {
    setData(defaultFormData)
    setShowBuyMeACoffe(true)
  }

  return (
    <Container className="pb-16 pt-5 lg:pt-10">
      <h1 className="mx-auto max-w-4xl text-center font-display text-5xl font-medium tracking-tight text-slate-900 sm:text-7xl">
        Frost{' '}
        <span className="relative whitespace-nowrap text-blue-600">
          <svg
            aria-hidden="true"
            viewBox="0 0 418 42"
            className="absolute left-0 top-2/3 h-[0.58em] w-full fill-blue-300/70"
            preserveAspectRatio="none"
          >
            <path d="M203.371.916c-26.013-2.078-76.686 1.963-124.73 9.946L67.3 12.749C35.421 18.062 18.2 21.766 6.004 25.934 1.244 27.561.828 27.778.874 28.61c.07 1.214.828 1.121 9.595-1.176 9.072-2.377 17.15-3.92 39.246-7.496C123.565 7.986 157.869 4.492 195.942 5.046c7.461.108 19.25 1.696 19.17 2.582-.107 1.183-7.874 4.31-25.75 10.366-21.992 7.45-35.43 12.534-36.701 13.884-2.173 2.308-.202 4.407 4.442 4.734 2.654.187 3.263.157 15.593-.78 35.401-2.686 57.944-3.488 88.365-3.143 46.327.526 75.721 2.23 130.788 7.584 19.787 1.924 20.814 1.98 24.557 1.332l.066-.011c1.201-.203 1.53-1.825.399-2.335-2.911-1.31-4.893-1.604-22.048-3.261-57.509-5.556-87.871-7.36-132.059-7.842-23.239-.254-33.617-.116-50.627.674-11.629.54-42.371 2.494-46.696 2.967-2.359.259 8.133-3.625 26.504-9.81 23.239-7.825 27.934-10.149 28.304-14.005.417-4.348-3.529-6-16.878-7.066Z" />
          </svg>
          <span className="relative"> stater theme</span>
        </span>{' '}
        generator.
      </h1>
      <p className="mx-auto mt-10 max-w-3xl text-center text-lg tracking-tight text-slate-500">
        Type your theme details in the form below, and a zip file will be
        generated for you.
      </p>
      <div className="mt-16 lg:flex">
        <Form updateData={updateData} onSubmit={onSubmit} />
        <ThemePreview data={data} showBuyMeACoffe={showBuyMeACoffe} />
      </div>
    </Container>
  )
}
