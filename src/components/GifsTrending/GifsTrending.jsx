import { useTrends } from '@/hooks/useTrends'
import { Trend } from '../Trend'

const GifsTrending = () => {
  const { trends } = useTrends()
  return (
    <div className='Gif-trend'>
      <h4>Trends</h4>
      {trends.map(({ title, id }) =>
        <Trend key={id} title={title} />
      )}
    </div>
  )
}

export default GifsTrending
