import { memo } from 'react'
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip'

export const StarRating = memo(function StarRating({ rating }) {
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger>
          {Array.from({ length: 5 }, (_, i) => (
            <span className="text-wppblue-500" key={i}>
              {i < Math.round(rating / 20) ? '★' : '☆'}
            </span>
          ))}
        </TooltipTrigger>
        <TooltipContent>Actual rating: {rating / 20} / 5</TooltipContent>
      </Tooltip>
    </TooltipProvider>
  )
})
