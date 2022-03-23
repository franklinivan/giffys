import { useGif } from '../hooks/useGif'
import { Gif } from './Gif'
import './Gif.css'

export const GifsList = ({ params }) => {
  const { keyword } = params
  const { gifs } = useGif({ keyword })

  return (
    <div className='Gif-list'>
      {
        gifs.map(({ id, title, url }) =>
          <Gif key={id} id={id} title={title} url={url} keyword={keyword} />
        )
      }
    </div>
  )
}
