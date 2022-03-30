import { GifsForm } from '@/components/GifsForm'
import { GifsList } from '@/components/GifsList'
import { GifsTrending } from '@/components/GifsTrending'
import { useGif } from '@/hooks/useGif'
import './style.css'

export default function Home () {
  const { gifs } = useGif()
  const firstTime = !window.localStorage.getItem('lastSearch-keyword')

  return (
    <div className='home'>
      <GifsForm />
      <p className='home-title'>
        {firstTime ? null : 'Last search'}
      </p>
      <GifsList gifs={gifs} />
      <GifsTrending />
    </div>
  )
}
