import { useState, useEffect } from 'react'
import getGifs from '../services/getGifs'
import { Gif } from './Gif'

export const ListOfGifs = () => {
  const [gifs, setGifs] = useState([])

  useEffect(() => {
    getGifs({ keyword: 'panda' }).then(gifs => setGifs(gifs))
  }, [])

  return (
    <div>
      {
        gifs.map(({ id, title, images }) =>
          <Gif key={id} title={title} images={images} />
        )
      }
    </div>
  )
}
