import { GifsForm } from '@/components/GifsForm'
import { GifsList } from '@/components/GifsList'
import { useGif } from '@/hooks/useGif'
import './style.css'

export default function SearchResults ({ params }) {
  const { keyword } = params
  const { gifs } = useGif({ keyword })

  return (
    <div className='Search-results'>
      <GifsForm />
      <GifsList gifs={gifs} keyword={keyword} />
    </div>
  )
}
