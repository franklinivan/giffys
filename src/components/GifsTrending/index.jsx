import { useNearScreen } from '@/hooks/useNearScreen'
import { lazy, Suspense } from 'react'
import './style.css'

const GifsTrending = lazy(() => import('@/components/GifsTrending/GifsTrending'))

export const LazyTrending = () => {
  const { isNearScreen, elementRef } = useNearScreen({ distance: '200px' })

  return (
    <div ref={elementRef}>
      <Suspense fallback='loading...'>
        {isNearScreen ? <GifsTrending /> : null}
      </Suspense>
    </div>
  )
}
