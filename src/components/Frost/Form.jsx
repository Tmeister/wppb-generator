import * as Yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
import { useForm } from 'react-hook-form'
import { TextField } from '@/components/Fields'
import { useState } from 'react'

export default function Form(props) {
  const data = {}
  const [loading, setLoading] = useState(false)

  const handleChange = (name, e) => {
    props.updateData({ ...data, [name]: e.target.value })
  }

  const validationSchema = Yup.object({
    name: Yup.string().required('Theme name is required'),
    slug: Yup.string().required('Theme slug is required'),
    uri: Yup.string().required('Plugin Uri is required'),
    description: Yup.string().nullable(),
    author: Yup.string().required('Author name is required'),
    authorURI: Yup.string().required('Author Uri is required'),
  })

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    mode: 'onSubmit',
    resolver: yupResolver(validationSchema),
  })

  const onSubmit = async (form) => {
    setLoading(true)
    const data = {
      name: form.name,
      slug: form.slug,
      uri: `https://${form.uri}`,
      description: form.description,
      author: form.author,
      authorURI: `https://${form.authorURI}`,
    }

    console.log(data)
    const response = await fetch('/api/generate-frost', { method: 'POST', body: JSON.stringify(data) })
    const blob = await response.blob()
    // Hacky wat to force the download
    const a = document.createElement('a')
    a.href = window.URL.createObjectURL(blob)
    a.download = `${form.slug}.zip`
    a.click()
    reset()
    setLoading(false)
    props.onSubmit()
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="mb-10 w-full space-y-5 divide-y divide-slate-200 rounded-lg border border-slate-200 px-10 py-5 shadow-lg lg:mb-0 lg:mr-10 lg:w-6/12"
    >
      <div className="space-y-8">
        <div className="mt-6 grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-6">
          <div className="sm:col-span-3">
            <TextField
              id="theme-name"
              name="name"
              type="text"
              placeholder="Theme Name"
              register={register}
              callback={handleChange}
              error={errors.name}
            />
          </div>
          <div className="sm:col-span-3">
            <TextField
              id="slug"
              name="slug"
              type="text"
              placeholder="theme-slug"
              register={register}
              callback={handleChange}
              error={errors.slug}
            />
          </div>
        </div>
        <div className="mt-1 w-full sm:mt-0">
          <div className="flex rounded-md shadow-sm">
            <span className="inline-flex items-center rounded-l-md border border-r-0 border-gray-300 bg-gray-50 px-3 text-gray-500 sm:text-sm">
              https://
            </span>
            <TextField
              id="uri"
              name="uri"
              type="text"
              autoCorrect="off"
              autoCapitalize="none"
              alternative={true}
              register={register}
              error={errors.uri}
              className="w-full"
              placeholder="Theme URL"
              callback={handleChange}
            />
          </div>
          {errors.pluginUri && <span className="mt-2 inline-block text-xs text-red-600">{errors.uri.message}</span>}
        </div>
        <div className="mt-6 grid grid-cols-1 gap-y-6 gap-x-4">
          <div className="sm:col-span-3">
            <TextField
              id="author"
              name="author"
              type="text"
              placeholder="Author Name"
              register={register}
              error={errors.author}
              callback={handleChange}
            />
          </div>
        </div>
        <div className="mt-1 w-full sm:mt-0">
          <div className="flex rounded-md shadow-sm">
            <span className="inline-flex items-center rounded-l-md border border-r-0 border-gray-300 bg-gray-50 px-3 text-gray-500 sm:text-sm">
              https://
            </span>
            <TextField
              id="author-uri"
              name="authorURI"
              type="text"
              placeholder="Author URL"
              autoCorrect="off"
              autoCapitalize="none"
              alternative={true}
              register={register}
              error={errors.authorURI}
              className="w-full"
              callback={handleChange}
            />
          </div>
          {errors.authorUri && (
            <span className="mt-2 inline-block text-xs text-red-600">{errors.authorURI.message}</span>
          )}
        </div>
        <div>
          <textarea
            placeholder="Theme Description"
            className="block w-full appearance-none rounded-md border border-gray-200 bg-slate-50 px-3 py-2 text-gray-900 placeholder-gray-400 focus:border-blue-400 focus:bg-white focus:outline-none focus:ring-blue-400 sm:text-sm"
            {...register('description')}
            onChange={(e) => handleChange('description', e)}
          ></textarea>
        </div>
      </div>
      <div className="flex justify-end pt-5">
        <button
          type="submit"
          className="inline-flex cursor-pointer items-center justify-center rounded-md border border-transparent bg-blue-600 px-8 py-3 font-medium text-white shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:cursor-not-allowed disabled:bg-slate-400"
          disabled={loading}
        >
          {loading && (
            <svg
              className="mr-3 -ml-1 h-5 w-5 animate-spin text-white"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
            >
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
              ></path>
            </svg>
          )}
          {loading ? 'Generating...' : 'Build Theme'}
        </button>
      </div>
    </form>
  )
}
