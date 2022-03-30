import { useTrends } from '@/hooks/useTrends'
import { useNearScreen } from '@/hooks/useNearScreen'
import './style.css'
import { Trend } from '../Trend'

const GifsTrending = () => {
  const { trends } = useTrends()
  return (
    <div className='Gif-trend'>
      <h4>Trends</h4>
      {trends.map(({ title }) =>
        <Trend key={title} title={title} />
      )}
    </div>
  )
}

export const LazyTrending = () => {
  const { isNearScreen, elementRef } = useNearScreen({ distance: '100px' })

  return (
    <div ref={elementRef}>
      {isNearScreen ? <GifsTrending /> : null}
    </div>
  )
}
