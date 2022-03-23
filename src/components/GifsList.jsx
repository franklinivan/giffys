import { useState, useEffect } from 'react'
import getGifs from '../services/getGifs'
import { Gif } from './Gif'
import './Gif.css'

export const GifsList = ({ params }) => {
  const { keyword } = params
  const [gifs, setGifs] = useState([])

  useEffect(() => {
    getGifs({ keyword }).then(gifs => setGifs(gifs))
  }, [keyword])

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
