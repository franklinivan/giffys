import { Gif } from '../Gif'
import './style.css'
const { VITE_DEFAULT_SEARCH } = import.meta.env

export const GifsList = ({ gifs, keyword }) => {
  if (!keyword) keyword = window.localStorage.getItem('lastSearch-keyword') || VITE_DEFAULT_SEARCH
  return (
    <div className='Gif-list'>
      {
        gifs.map(({ id, title, url }) =>
          <Gif
            key={id}
            id={id}
            title={title}
            url={url}
            keyword={keyword}
          />
        )
      }
    </div>
  )
}
