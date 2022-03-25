import { GifsForm } from '../../components/GifsForm'
import { GifsList } from '../../components/GifsList'
import { useGif } from '../../hooks/useGif'

export default function SearchResults ({ params }) {
  const { keyword } = params
  const { gifs } = useGif({ keyword })

  return (
    <>
      <GifsForm />
      <GifsList gifs={gifs} />
    </>
  )
}
