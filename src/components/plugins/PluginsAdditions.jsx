'use client'

import { useState, useEffect, useMemo, useCallback } from 'react'
import { Bar, BarChart, CartesianGrid, XAxis, YAxis } from 'recharts'

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from '@/components/ui/chart'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'

export const description = 'An interactive area chart showing plugin additions'

const chartConfig = {
  pluginCount: {
    label: 'Plugins ',
    color: 'hsl(var(--primary))',
  },
}

const timeFrameOptions = [
  { value: 'year', label: 'Yearly' },
  { value: 'month', label: 'Monthly' },
  { value: 'day', label: 'Daily' },
]

const getLimitOptions = (timeFrame) => {
  switch (timeFrame) {
    case 'year':
      return [
        { value: '5', label: '5 years' },
        { value: '10', label: '10 years' },
        { value: '15', label: '15 years' },
        { value: 'all', label: 'All time' },
      ]
    case 'month':
      return Array.from({ length: 4 }, (_, i) => {
        const value = (i + 1) * 12
        return { value: value.toString(), label: `${value} months` }
      })
    case 'day':
      return [7, 14, 30, 60].map((value) => ({
        value: value.toString(),
        label: `${value} days`,
      }))
    default:
      return []
  }
}

const formatDate = (date, timeFrame) => {
  if (typeof date === 'number') {
    return date.toString() // Handle year
  }

  // For daily view, the date is already in YYYY-MM-DD format
  if (timeFrame === 'day') {
    const [year, month, day] = date.split('-')
    return `${new Date(year, month - 1, day).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}`
  }

  // For monthly view, date is in YYYY-MM format
  if (timeFrame === 'month') {
    const [year, month] = date.split('-')
    return new Date(year, month - 1).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
    })
  }

  const parsedDate = new Date(date)
  if (isNaN(parsedDate.getTime())) {
    console.warn('Invalid date:', date)
    return date // Return original if parsing fails
  }

  switch (timeFrame) {
    case 'year':
      return parsedDate.getFullYear().toString()
    case 'day':
      return parsedDate.toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'short',
        day: 'numeric',
      })
    default:
      console.warn('Unknown timeFrame:', timeFrame)
      return date
  }
}

export function PluginsAdditions() {
  const [timeFrame, setTimeFrame] = useState('day')
  const [limit, setLimit] = useState('60')
  const [chartData, setChartData] = useState([])

  // Memoize limitOptions to avoid recalculation on every render
  const limitOptions = useMemo(() => getLimitOptions(timeFrame), [timeFrame])

  // Use useCallback to memoize the fetchData function
  const fetchData = useCallback(async () => {
    const baseUrl = process.env.NEXT_PUBLIC_PLUGINS_API_BASE_URL
    let url = `${baseUrl}/plugins/additions?time_frame=${timeFrame}`

    if (limit !== 'all') {
      url += `&time_limit=${limit}`
    }

    try {
      const response = await fetch(url)
      const result = await response.json()
      const formattedData = result.data.map((item) => ({
        date:
          timeFrame === 'year'
            ? item.year
            : timeFrame === 'day'
              ? item.date
              : item[timeFrame],
        pluginCount: item.plugin_count,
        downloads: item.downloads, // Make sure this field is available in the API response
      }))
      setChartData(formattedData)
    } catch (error) {
      console.error('Error fetching data:', error)
    }
  }, [timeFrame, limit])

  useEffect(() => {
    if (timeFrame !== 'day') {
      setLimit(getLimitOptions(timeFrame)[0].value)
    }
  }, [timeFrame])

  useEffect(() => {
    fetchData()
  }, [fetchData])

  // Memoize the chart component to prevent unnecessary re-renders
  const chart = useMemo(
    () => (
      <ChartContainer
        config={chartConfig}
        className="aspect-auto h-[250px] w-full"
      >
        <BarChart data={chartData}>
          <CartesianGrid vertical={false} />
          <XAxis
            dataKey="date"
            tickLine={false}
            axisLine={false}
            tickMargin={8}
            interval={0}
            angle={-45}
            textAnchor="end"
            height={70}
            tickFormatter={(value) => formatDate(value, timeFrame)}
          />
          <YAxis
            tickLine={false}
            axisLine={false}
            tickMargin={8}
            tickFormatter={(value) => value.toLocaleString()}
          />
          <ChartTooltip
            cursor={{ fill: 'rgba(0, 0, 0, 0.1)' }}
            content={
              <ChartTooltipContent
                indicator="bar"
                formatter={(value, name, props) => [
                  <div key="plugins">{`${value} plugins added`}</div>,
                  <br key="br" />,
                  <div key="date">{`Date: ${formatDate(props.payload.date, timeFrame)}`}</div>,
                ]}
              />
            }
          />
          <Bar dataKey="pluginCount" fill="hsl(var(--primary))" />
        </BarChart>
      </ChartContainer>
    ),
    [chartData, timeFrame],
  )

  return (
    <Card className="rounded-sm">
      <CardHeader className="flex flex-col items-start gap-2 space-y-0 border-b py-5 lg:flex-row lg:items-center">
        <div className="grid flex-1 gap-1 sm:text-left lg:pr-7">
          <CardTitle className="text-xl">
            WordPress Plugin Additions Overview
          </CardTitle>
          <CardDescription className="leading-normal">
            This interactive chart displays the number of new WordPress plugins
            added to the directory over time. Toggle between yearly, monthly, or
            daily views to analyze trends across different time scales.
          </CardDescription>
        </div>
        <div className="flex gap-2">
          <Select value={timeFrame} onValueChange={setTimeFrame}>
            <SelectTrigger
              className="w-[160px] rounded-lg sm:ml-auto"
              aria-label="Select time frame"
            >
              <SelectValue placeholder="Select time frame" />
            </SelectTrigger>
            <SelectContent className="rounded-xl">
              {timeFrameOptions.map((option) => (
                <SelectItem
                  key={option.value}
                  value={option.value}
                  className="rounded-lg"
                >
                  {option.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          <Select value={limit} onValueChange={setLimit}>
            <SelectTrigger
              className="w-[160px] rounded-lg sm:ml-auto"
              aria-label="Select limit"
            >
              <SelectValue placeholder="Select limit" />
            </SelectTrigger>
            <SelectContent className="rounded-xl">
              {limitOptions.map((option) => (
                <SelectItem
                  key={option.value}
                  value={option.value}
                  className="rounded-lg"
                >
                  {option.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      </CardHeader>
      <CardContent className="px-2 pt-4 sm:px-6 sm:pt-6">{chart}</CardContent>
    </Card>
  )
}
