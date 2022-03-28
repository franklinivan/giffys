import { useTrends } from '@/hooks/useTrends'
import { Link } from 'wouter'
import './style.css'

export const GifsTrending = () => {
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
