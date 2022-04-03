import { useNearScreen } from '@/hooks/useNearScreen'
import { lazy, Suspense, useRef } from 'react'
import './style.css'

const GifsTrending = lazy(() => import('@/components/GifsTrending/GifsTrending'))

export const LazyTrending = () => {
  const elementRef = useRef()
  const { isNearScreen } = useNearScreen({ distance: '200px', elementRef })

  return (
    <div ref={elementRef}>
      <Suspense fallback='loading...'>
        {isNearScreen ? <GifsTrending /> : null}
      </Suspense>
    </div>
  )
}
