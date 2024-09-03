'use client'

import { useState, useEffect } from 'react'
import { fetchData } from '@/lib/pluginsApi'

export const useApiData = (endpoint, params = {}) => {
  const [data, setData] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    const fetchApiData = async () => {
      try {
        setLoading(true)
        const result = await fetchData(endpoint, params)
        setData(result)
      } catch (err) {
        setError(err)
      } finally {
        setLoading(false)
      }
    }

    fetchApiData()
  }, [endpoint, JSON.stringify(params)])

  return { data, loading, error }
}
