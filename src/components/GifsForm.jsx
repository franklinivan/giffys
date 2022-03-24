import { useState } from 'react'
import { useLocation, Link } from 'wouter'
import './Gif.css'

export const GifsForm = () => {
  const [value, setValue] = useState('')
  const [path, setLocation] = useLocation() // eslint-disable-line

  const handleSubmit = e => {
    e.preventDefault()
    setLocation(`/gif/${value}`)
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className='Gif-form'>
        <input
          onChange={({ target }) => setValue(target.value)} value={value}
          placeholder='...'
        />
        <Link onClick={() => setValue('')} to={`/gif/${value}`}>
          search gifs
        </Link>
      </div>
    </form>
  )
}
