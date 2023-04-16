import { async } from 'replace/bin/shared-options'
import fetch from 'node-fetch'

const GA_MEASUREMENT_ID = 'G-7PPWKH5DX1'
const GA_API_SECRET = '7AIoL8dbSI-e0wxvGdZP9A'
const GA_API_ENDPOINT = 'https://www.google-analytics.com/mp/collect'

const ga4Track = async (eventName, eventParams) => {
  const clientId = 'wppb-tracker-2023'
  const eventPayload = {
    client_id: clientId,
    events: [
      {
        name: eventName,
        params: eventParams,
      },
    ],
  }

  const requestOptions = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'X-Goog-MP-MEASUREMENT-ID': GA_MEASUREMENT_ID,
      'X-Goog-MP-RECEIVED-CLIENT-ID': clientId,
      'X-Goog-MP-RECEIVED-API-SECRET': GA_API_SECRET,
    },
    body: JSON.stringify(eventPayload),
  }

  try {
    const response = await fetch(GA_API_ENDPOINT, requestOptions)

    if (response.ok) {
      console.log('Custom event sent successfully.')
    } else {
      console.error('Error sending custom event:', response.statusText)
    }
  } catch (error) {
    console.error('Error sending custom event:', error)
  }
}
export default ga4Track
