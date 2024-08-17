'use client'

import * as Yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
import { useForm } from 'react-hook-form'
import { useState } from 'react'

import { Button } from '@/components/Button'
import { EnvelopeIcon } from '@heroicons/react/24/outline'

export function Newsletter(props) {
  const [loading, setLoading] = useState(false)
  const [subscribed, setSubscribed] = useState(false)
  const validationSchema = Yup.object({
    email: Yup.string()
      .email('Please enter a valid email')
      .required('Email is required'),
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
    console.log(form)
    setLoading(true)

    const response = await fetch('/api/subscribe', {
      method: 'POST',
      body: JSON.stringify(form),
    })

    reset()
    setSubscribed(true)
    setLoading(false)
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="rounded-2xl border border-zinc-100 p-6 dark:border-zinc-700/40"
    >
      <h2 className="flex text-sm font-semibold text-zinc-900 dark:text-zinc-100">
        <EnvelopeIcon className="h-6 w-6 flex-none text-gray-400" />
        <span className="ml-3">Stay up to date</span>
      </h2>
      <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
        Get notified about news and updates.
      </p>
      <div className="mt-6 flex">
        <input
          type="email"
          placeholder="Email address"
          aria-label="Email address"
          required
          {...register('email')}
          error={errors.email}
          className="min-w-0 flex-auto appearance-none rounded-md border border-zinc-900/10 bg-white px-3 py-[calc(theme(spacing.2)-1px)] shadow-md shadow-zinc-800/5 placeholder:text-zinc-400 focus:border-indigo-500 focus:outline-none focus:ring-4 focus:ring-indigo-500/10 dark:border-zinc-700 dark:bg-zinc-700/[0.15] dark:text-zinc-200 dark:placeholder:text-zinc-500 dark:focus:border-indigo-400 dark:focus:ring-indigo-400/10 sm:text-sm"
        />
        <Button type="submit" className="ml-4 flex-none">
          Subscbribe
        </Button>
      </div>
      {subscribed && (
        <span className="mt-3 block text-xs text-wppblue-500">
          Thanks for subscribing! We&apos;ll keep you updated.
        </span>
      )}
    </form>
  )
}
