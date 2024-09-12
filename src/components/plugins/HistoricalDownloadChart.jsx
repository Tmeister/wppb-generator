'use client'

import { useMemo } from 'react'
import { Area, AreaChart, CartesianGrid, XAxis, YAxis } from 'recharts'
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

const chartConfig = {
  downloads: {
    label: 'Downloads ',
    color: 'hsl(var(--primary))',
  },
}

function HistoricalDownloadsChart({ downloads }) {
  const data = downloads.map((item) => {
    const date = new Date(item.date)
    date.setDate(date.getDate() + 2) // Add two day to correct the date

    return {
      date: date.toLocaleDateString('en-US', {
        month: 'short',
        day: 'numeric',
      }),
      downloads: item.daily_downloads,
    }
  })

  const minDownloads = Math.min(...data.map((item) => item.downloads))

  const chart = useMemo(
    () => (
      <ChartContainer
        config={chartConfig}
        className="aspect-auto h-[250px] w-full"
      >
        <AreaChart data={data}>
          <defs>
            <linearGradient id="fillDownloads" x1="0" y1="0" x2="0" y2="1">
              <stop
                offset="5%"
                stopColor="hsl(var(--primary))"
                stopOpacity={0.8}
              />
              <stop
                offset="95%"
                stopColor="hsl(var(--primary))"
                stopOpacity={0.1}
              />
            </linearGradient>
          </defs>
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
          />
          <YAxis
            tickLine={false}
            axisLine={false}
            tickMargin={8}
            tickFormatter={(value) => value.toLocaleString()}
            domain={[minDownloads, 'auto']}
          />
          <ChartTooltip
            cursor={false}
            content={
              <ChartTooltipContent
                indicator="dot"
                formatter={(value) => `${value.toLocaleString()} downloads`}
              />
            }
          />
          <Area
            dataKey="downloads"
            type="monotone"
            fill="url(#fillDownloads)"
            stroke="hsl(var(--primary))"
          />
        </AreaChart>
      </ChartContainer>
    ),
    [data, minDownloads],
  )

  return (
    <Card className="rounded-sm">
      <CardHeader className="flex flex-col items-start gap-2 space-y-0 border-b py-5">
        <div className="grid flex-1 gap-1 sm:text-left">
          <CardTitle className="text-xl">Historical Downloads</CardTitle>
          <CardDescription className="leading-normal">
            This chart shows the historical download trends for the plugin.
          </CardDescription>
        </div>
      </CardHeader>
      <CardContent className="px-2 pt-4 sm:px-6 sm:pt-6">{chart}</CardContent>
    </Card>
  )
}

export default HistoricalDownloadsChart
