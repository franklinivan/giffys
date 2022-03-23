import { useState } from 'react'
import { Link } from 'wouter'
import './Gif.css'

export const GifsForm = () => {
  const [value, setValue] = useState('')

  return (
    <div className='Gif-form'>
      <input
        onChange={({ target }) => setValue(target.value)} value={value}
        placeholder='...'
      />
      <Link onClick={() => setValue('')} to={`/gif/${value}`}>
        search gifs
      </Link>
    </div>
  )
}
