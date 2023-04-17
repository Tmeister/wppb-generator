import { useEffect, useState } from 'react'

import { WPEngine } from './Banners/WPEngine'
import { WPRocket } from './Banners/WPRocket'
import { Crocoblock } from './Banners/Crocoblock'
import { XMarkIcon } from '@heroicons/react/24/solid'

export function Affiliates() {
  const components = [WPEngine, WPRocket, Crocoblock]
  const index = Math.floor(Math.random() * components.length)
  const SelectedComponent = components[index]
  const [showAds, setShowAds] = useState(false)
  const handleCloseBtnClick = () => setShowAds(false)

  useEffect(() => {
    const timer = setTimeout(() => setShowAds(true), 5000)
    return () => clearTimeout(timer)
  }, [])

  return (
    showAds && (
      <section className="fixed bottom-3 left-3 max-w-sm rounded border bg-slate-100 p-3 shadow-lg">
        <div className="absolute right-1 top-1 z-10 rounded-full bg-red-600 p-0.5 ">
          <XMarkIcon
            className="h-4 w-4 cursor-pointer text-white"
            onClick={handleCloseBtnClick}
          />
        </div>
        <SelectedComponent />
      </section>
    )
  )
}
