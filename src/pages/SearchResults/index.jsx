import { useRef, useEffect, useCallback } from 'react'
import { GifsForm } from '@/components/GifsForm'
import { GifsList } from '@/components/GifsList'
import { useGif } from '@/hooks/useGif'
import { useNearScreen } from '@/hooks/useNearScreen'
import throttle from 'just-throttle'
import './style.css'

export default function SearchResults ({ params }) {
  const { keyword } = params
  const { gifs, setPage } = useGif({ keyword })
  const elementRef = useRef()
  const { isNearScreen } = useNearScreen({ elementRef, once: false, distance: '300px' })

  const thottleHandleMoreGifs = useCallback(throttle(
    () => setPage(prevPage => prevPage + 1), 200
  ), [])

  useEffect(() => {
    if (isNearScreen) thottleHandleMoreGifs()
  }, [isNearScreen, thottleHandleMoreGifs])

  return (
    <div className='Search-results'>
      <GifsForm />
      <p className='Search-title'>{decodeURI(keyword)}</p>
      <GifsList gifs={gifs} keyword={keyword} />
      <div id='visor' ref={elementRef} />
    </div>
  )
}
