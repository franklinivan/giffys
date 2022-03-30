import { useTrends } from '@/hooks/useTrends'
import { useNearScreen } from '@/hooks/useNearScreen'
import { Link } from 'wouter'
import './style.css'

const GifsTrending = () => {
  const { trends } = useTrends()
  return (
    <div className='Gif-trend'>
      <h4>Trends</h4>
      {trends.map(({ title }) =>
        <Link to={`/gif/${title}`} key={title}>
          <span>{title}</span>
        </Link>
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
