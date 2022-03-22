import { useState, useEffect } from 'react'
import getGifs from '../services/getGifs'
import { Gif } from './Gif'

export const GifsList = ({ params }) => {
  console.log(params)
  const { keyword } = params
  const [gifs, setGifs] = useState([])

  useEffect(() => {
    getGifs({ keyword }).then(gifs => setGifs(gifs))
  }, [keyword])

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
