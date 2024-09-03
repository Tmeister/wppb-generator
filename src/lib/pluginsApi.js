// utils/api.js

const API_BASE_URL = process.env.NEXT_PUBLIC_PLUGINS_API_BASE_URL

if (!API_BASE_URL) {
  throw new Error(
    'NEXT_PUBLIC_API_BASE_URL is not defined in the environment variables',
  )
}

export const fetchData = async (endpoint, params = {}) => {
  const queryString = new URLSearchParams(params).toString()
  const url = `${API_BASE_URL}${endpoint}${queryString ? `?${queryString}` : ''}`

  try {
    const response = await fetch(url)
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`)
    }
    return await response.json()
  } catch (error) {
    console.error(`Error fetching data from ${endpoint}:`, error)
    throw error
  }
}
