'use client'

import { useState, useEffect } from 'react'

import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from '@/components/ui/card'

import { ChartContainer, ChartTooltip } from '@/components/ui/chart'

import {
  Area,
  AreaChart,
  CartesianGrid,
  XAxis,
  YAxis,
  ResponsiveContainer,
} from 'recharts'

const chartConfig = {
  '5 Stars': {
    label: '5 Stars',
    color: 'hsl(var(--primary))',
  },
  '4 Stars': {
    label: '4 Stars',
    color: 'hsl(var(--primary) / 0.80)',
  },
  '3 Stars': {
    label: '3 Stars',
    color: 'hsl(var(--primary) / 0.70)',
  },
  '2 Stars': {
    label: '2 Stars',
    color: 'hsl(var(--primary) / 0.60)',
  },
  '1 Star': {
    label: '1 Star',
    color: 'hsl(var(--primary) / 0.50)',
  },
}

const CustomTooltip = ({ active, payload, label }) => {
  if (active && payload && payload.length) {
    const total = payload.reduce((sum, entry) => sum + entry.value, 0)
    return (
      <div
        className="custom-tooltip rounded-md border border-border bg-background p-4 shadow-md"
        style={{ minWidth: '200px' }}
      >
        <p className="mb-2 font-semibold">{label}</p>
        <p className="mb-2 font-semibold">
          Total Ratings: {total.toLocaleString()}
        </p>
        {payload.map((entry, index) => (
          <div
            key={`item-${index}`}
            className="flex items-center justify-between"
          >
            <span style={{ color: entry.color }}>{entry.name}:</span>
            <span>
              {entry.value.toLocaleString()} (
              {((entry.value / total) * 100).toFixed(1)}%)
            </span>
          </div>
        ))}
      </div>
    )
  }
  return null
}

export function HistoricalRatingsChart({ plugin }) {
  const [chartData, setChartData] = useState([])
  const [yAxisDomain, setYAxisDomain] = useState([0, 'auto'])

  useEffect(() => {
    if (plugin && plugin.ratings) {
      const formattedData = plugin.ratings.map((rating) => ({
        date: new Date(rating.date).toLocaleDateString('en-US', {
          month: 'short',
          day: 'numeric',
        }),
        '5 Stars': rating.rating_5,
        '4 Stars': rating.rating_4,
        '3 Stars': rating.rating_3,
        '2 Stars': rating.rating_2,
        '1 Star': rating.rating_1,
        total: rating.total_ratings,
      }))
      setChartData(formattedData)

      // Calculate the maximum total ratings
      const maxTotal = Math.max(...formattedData.map((data) => data.total))
      // Set the Y-axis domain to go from 0 to 110% of the maximum value
      setYAxisDomain([0, Math.ceil(maxTotal * 1.1)])
    }
  }, [plugin])

  return (
    <Card className="rounded-sm">
      <CardHeader className="flex flex-col items-start gap-2 space-y-0 border-b py-5">
        <div className="grid flex-1 gap-1 sm:text-left">
          <CardTitle className="text-xl">Historical Ratings</CardTitle>
          <CardDescription className="leading-normal">
            This chart shows the historical rating trends for the plugin.
          </CardDescription>
        </div>
      </CardHeader>
      <CardContent className="px-2 pt-4 sm:px-6 sm:pt-6">
        <ChartContainer config={chartConfig}>
          <ResponsiveContainer width="100%" height={400}>
            <AreaChart
              data={chartData}
              margin={{
                left: 0,
                right: 0,
                top: 20,
                bottom: 0,
              }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis
                dataKey="date"
                tickLine={false}
                axisLine={false}
                tickMargin={8}
                interval={0}
                angle={-45}
                textAnchor="end"
                height={70}
              />
              <YAxis
                domain={yAxisDomain}
                tickLine={false}
                axisLine={false}
                tickMargin={8}
                tickFormatter={(value) => value.toLocaleString()}
              />
              <ChartTooltip content={<CustomTooltip />} />
              {Object.keys(chartConfig)
                .reverse()
                .map((key) => (
                  <Area
                    key={key}
                    type="monotone"
                    dataKey={key}
                    stackId="1"
                    stroke={chartConfig[key].color}
                    fill={chartConfig[key].color}
                  />
                ))}
            </AreaChart>
          </ResponsiveContainer>
        </ChartContainer>
      </CardContent>
    </Card>
  )
}
