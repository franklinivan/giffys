import { GifsForm } from '@/components/GifsForm'
import { GifsList } from '@/components/GifsList'
import { useGif } from '@/hooks/useGif'
import './style.css'

export default function SearchResults ({ params }) {
  const { keyword } = params
  const { gifs, setPage } = useGif({ keyword })

  const handleMoreGifs = () => setPage(prevPage => prevPage + 1)

  return (
    <div className='Search-results'>
      <GifsForm />
      <p className='Search-title'>{decodeURI(keyword)}</p>
      <GifsList gifs={gifs} keyword={keyword} />
      <button className='Search-button' onClick={handleMoreGifs}>more Gifs</button>
    </div>
  )
}
