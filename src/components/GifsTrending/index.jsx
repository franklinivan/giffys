import { useState, useEffect } from 'react'
import { useTrends } from '@/hooks/useTrends'
import { Link } from 'wouter'
import './style.css'

const GifsTrending = () => {
  const { trends } = useTrends()
  return (
    <div className='Gif-trend'>
      <h4>Trends</h4>
      {trends.map(({ title }) =>
        <Link to={`/gif/${title}`} key={title}>
          <span>{title}</span>
        </Link>
      )}
    </div>
  )
}

export const LazyTrending = () => {
  const [show, setShow] = useState(false) // eslint-disable-line

  useEffect(() => {
    const onChange = entries => {
      const el = entries[0]
      if (el.isIntersecting) setShow(true)
    }

    const observer = new IntersectionObserver(onChange, { // eslint-disable-line
      rootMargin: '100px'
    })

    observer.observe(document.getElementById('Lazy-trending'))
  })

  return (
    <div id='Lazy-trending'>
      {show ? <GifsTrending /> : null}
    </div>
  )
}
