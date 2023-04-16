import { useState } from 'react'
import { WPEngine } from './Banners/WPEngine'
import { XCircleIcon } from '@heroicons/react/24/solid'

export function Affiliates(props) {
  const components = [WPEngine]
  const index = Math.floor(Math.random() * components.length)
  const SelectedComponent = components[index]
  const [showAds, setShowAds] = useState(true)
  const handleCloseBtnClick = () => setShowAds(false)

  return (
    showAds && (
      <section className="fixed bottom-3 left-3 max-w-sm rounded border bg-slate-100 p-3 shadow-lg">
        <XCircleIcon
          className="absolute right-1 top-1 z-10 h-5 w-5 cursor-pointer text-orange-500"
          onClick={handleCloseBtnClick}
        />
        <SelectedComponent />
      </section>
    )
  )
}
