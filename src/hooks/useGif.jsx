import { useState, useEffect } from 'react'
import getGifs from '@/services/getGifs'

export const useGif = ({ keyword }) => {
  const [gifs, setGifs] = useState([])

  useEffect(() => {
    getGifs({ keyword }).then(gifs => setGifs(gifs))
  }, [keyword])

  const getOneGif = id => gifs.find(gif => gif.id === id)

  return {
    gifs,
    getOneGif
  }
}
