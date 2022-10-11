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
    pluginName: Yup.string().required('Plugin name is required'),
    pluginSlug: Yup.string().required('Plugin slug is required'),
    pluginUri: Yup.string().required('Plugin Uri is required'),
    pluginDescription: Yup.string().nullable(),
    authorName: Yup.string().required('Author name is required'),
    authorUri: Yup.string().required('Author Uri is required'),
    authorEmail: Yup.string().email('Please enter a valid email').required('Author email is required'),
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
      plugin: {
        name: form.pluginName,
        slug: form.pluginSlug,
        uri: `https://${form.pluginUri}`,
        description: form.pluginDescription,
      },
      author: {
        name: form.authorName,
        email: form.authorEmail,
        uri: `https://${form.authorUri}`,
      },
    }

    const response = await fetch('/api/generate', { method: 'POST', body: JSON.stringify(data) })
    const blob = await response.blob()
    // Hacky wat to force the download
    const a = document.createElement('a')
    a.href = window.URL.createObjectURL(blob)
    a.download = `${form.pluginSlug}.zip`
    a.click()
    reset()
    setLoading(false)
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className=" mb-10 w-full space-y-5 divide-y divide-slate-200 rounded-lg border border-slate-200 px-10 py-5 shadow-lg lg:mb-0 lg:mr-10 lg:w-6/12"
    >
      <div className="space-y-8">
        <div className="mt-6 grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-6">
          <div className="sm:col-span-3">
            <TextField
              id="plugin-name"
              name="pluginName"
              type="text"
              placeholder="Plugin Name"
              register={register}
              callback={handleChange}
              error={errors.pluginName}
            />
          </div>
          <div className="sm:col-span-3">
            <TextField
              id="plugin-slug"
              name="pluginSlug"
              type="text"
              placeholder="plugin-slug"
              register={register}
              callback={handleChange}
              error={errors.pluginSlug}
            />
          </div>
        </div>
        <div className="mt-1 w-full sm:mt-0">
          <div className="flex rounded-md shadow-sm">
            <span className="inline-flex items-center rounded-l-md border border-r-0 border-gray-300 bg-gray-50 px-3 text-gray-500 sm:text-sm">
              https://
            </span>
            <TextField
              id="plugin-uri"
              name="pluginUri"
              type="text"
              autoCorrect="off"
              autoCapitalize="none"
              alternative={true}
              register={register}
              error={errors.pluginUri}
              className="w-full"
              placeholder="Plugin URL"
              callback={handleChange}
            />
          </div>
          {errors.pluginUri && (
            <span className="mt-2 inline-block text-xs text-red-600">{errors.pluginUri.message}</span>
          )}
        </div>
        <div className="mt-6 grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-6">
          <div className="sm:col-span-3">
            <TextField
              id="author-name"
              name="authorName"
              type="text"
              placeholder="Author Name"
              register={register}
              error={errors.authorName}
              callback={handleChange}
            />
          </div>
          <div className="sm:col-span-3">
            <TextField
              id="author-email"
              name="authorEmail"
              type="email"
              placeholder="Author Email"
              register={register}
              error={errors.authorEmail}
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
              name="authorUri"
              type="text"
              placeholder="Author URL"
              autoCorrect="off"
              autoCapitalize="none"
              alternative={true}
              register={register}
              error={errors.authorUri}
              className="w-full"
              callback={handleChange}
            />
          </div>
          {errors.authorUri && (
            <span className="mt-2 inline-block text-xs text-red-600">{errors.authorUri.message}</span>
          )}
        </div>
        <div>
          <textarea
            placeholder="Plugin Short Description"
            className="block w-full appearance-none rounded-md border border-gray-200 bg-slate-50 px-3 py-2 text-gray-900 placeholder-gray-400 focus:border-blue-400 focus:bg-white focus:outline-none focus:ring-blue-400 sm:text-sm"
            {...register('pluginDescription')}
            onChange={(e) => handleChange('pluginDescription', e)}
          ></textarea>
        </div>
      </div>
      <div className="flex justify-end pt-5">
        <button
          type="submit"
          className="inline-flex cursor-pointer items-center justify-center rounded-md border border-transparent bg-blue-600 py-3 px-8 font-medium text-white shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:cursor-not-allowed disabled:bg-slate-400"
          disabled={loading}
        >
          {loading && (
            <svg
              className="-ml-1 mr-3 h-5 w-5 animate-spin text-white"
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
          {loading ? 'Generating...' : 'Build Plugin'}
        </button>
      </div>
    </form>
  )
}
