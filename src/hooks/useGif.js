import { useState, useEffect } from 'react'
import { getGifs } from '@/services/getGifs'
const { VITE_DEFAULT_SEARCH } = import.meta.env
const INITIAL_PAGE = 0

export const useGif = ({ keyword } = {}) => {
  const [gifs, setGifs] = useState([])
  const [page, setPage] = useState(INITIAL_PAGE)
  if (!keyword) keyword = window.localStorage.getItem('lastSearch-keyword') || VITE_DEFAULT_SEARCH

  useEffect(() => {
    getGifs({ keyword }).then(gifs => setGifs(gifs))
  }, [keyword])

  useEffect(() => {
    if (page === INITIAL_PAGE) return
    getGifs({ keyword, page }).then(moreGifs => setGifs(gifs.concat(moreGifs)))
  }, [page])

  const getOneGif = id => gifs.find(gif => gif.id === id)

  return {
    gifs,
    getOneGif,
    setPage
  }
}
