import { GifsForm } from '@/components/GifsForm'
import { GifsList } from '@/components/GifsList'
import { GifsTrending } from '@/components/GifsTrending'
import { useGif } from '@/hooks/useGif'

export default function Home () {
  const { gifs } = useGif()
  return (
    <>
      <GifsForm />
      <GifsList gifs={gifs} />
      <GifsTrending />
    </>
  )
}
