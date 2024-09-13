'use client'

import { useMemo } from 'react'
import {
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from '@/components/ui/card'

import { StarRating } from '@/components/StarRating'
import HistoricalDownloadsChart from '@/components/plugins/HistoricalDownloadChart'
import { HistoricalRatingsChart } from '@/components/plugins/HistoricalRatingsChart'
import { CalendarDays, Download, Users } from 'lucide-react'

export function PluginDetails({ plugin }) {
  // Memoize the HistoricalDownloadsChart
  const memoizedChart = useMemo(
    () => <HistoricalDownloadsChart downloads={plugin.downloads} />,
    [plugin.downloads],
  )

  // Memoize the HistoricalRatingsChart
  const memoizedHistoricalRatingsChart = useMemo(
    () => <HistoricalRatingsChart ratings={plugin.ratings} />,
    [plugin.ratings],
  )

  return (
    <div className="my-8 rounded-sm border-t border-slate-200">
      <CardHeader className="px-0">
        <CardTitle className="flex items-center justify-between text-xl">
          <h2 className="max-w-[920px] truncate" title={plugin.name}>
            {plugin.name}
          </h2>
          <StarRating rating={plugin.current_rating} />
        </CardTitle>
        <CardDescription>{plugin.short_description}</CardDescription>
      </CardHeader>
      <CardContent className="px-0">
        <div className="grid grid-cols-2 gap-6 md:grid-cols-4">
          <MetadataItem
            icon={<CalendarDays className="h-4 w-4" />}
            label="Published"
            value={plugin.added}
          />
          <MetadataItem
            icon={<CalendarDays className="h-4 w-4" />}
            label="Updated"
            value={plugin.last_updated}
          />
          <MetadataItem
            icon={<Download className="h-4 w-4" />}
            label="Historical Downloads"
            value={plugin.human_current_downloaded}
          />
          <MetadataItem
            icon={<Users className="h-4 w-4" />}
            label="Active installs"
            value={plugin.human_active_installs}
          />
        </div>
        <div className="mt-6">{memoizedChart}</div>
        <div className="mt-6">{memoizedHistoricalRatingsChart}</div>
      </CardContent>
    </div>
  )
}

const MetadataItem = ({ icon, label, value }) => {
  return (
    <div className="flex items-center space-x-3 rounded-lg bg-muted p-4">
      <div className="rounded-full bg-background p-2">{icon}</div>
      <div>
        <div className="text-sm font-medium">{label}</div>
        <div className="text-sm text-muted-foreground">{value}</div>
      </div>
    </div>
  )
}
