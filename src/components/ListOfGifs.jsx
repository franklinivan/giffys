import { useState, useEffect } from 'react'
import getGifs from '../services/getGifs'
import { Gif } from './Gif'

export const ListOfGifs = ({ keyword = 'morty' }) => {
  const [gifs, setGifs] = useState([])

  useEffect(() => {
    getGifs({ keyword }).then(gifs => setGifs(gifs))
  }, [])

  return (
    <div>
      {
        gifs.map(({ id, title, url }) =>
          <Gif key={id} title={title} url={url} />
        )
      }
    </div>
  )
}
