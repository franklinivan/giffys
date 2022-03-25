import { Gif } from './Gif'
import './Gif.css'

export const GifsList = ({ gifs }) => {
  return (
    <div className='Gif-list'>
      {
        gifs.map(({ id, title, url }) =>
          <Gif key={id} id={id} title={title} url={url} />
        )
      }
    </div>
  )
}
