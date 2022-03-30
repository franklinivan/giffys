import { useState, useEffect } from 'react'
import { getGifs } from '@/services/getGifs'
const { VITE_DEFAULT_SEARCH } = import.meta.env

export const useGif = ({ keyword } = {}) => {
  const [gifs, setGifs] = useState([])
  if (!keyword) keyword = window.localStorage.getItem('lastSearch-keyword') || VITE_DEFAULT_SEARCH

  useEffect(() => {
    getGifs({ keyword }).then(gifs => setGifs(gifs))
  }, [keyword])

  const getOneGif = id => gifs.find(gif => gif.id === id)

  return {
    gifs,
    getOneGif
  }
}
