import { useState } from 'react'
import { useLocation } from 'wouter'
import './style.css'

export const GifsForm = () => {
  const [keyword, setKeyword] = useState('')
  const [path, setLocation] = useLocation() // eslint-disable-line

  const handleSubmit = e => {
    e.preventDefault()
    setLocation(`/${keyword}`)
    setKeyword('')
    window.localStorage.setItem('lastSearch-keyword', keyword)
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className='Gif-form'>
        <h4>Giffys</h4>
        <input
          onChange={({ target }) => setKeyword(target.value)} value={keyword}
          placeholder='...'
        />
        <button>search gifs</button>
      </div>
    </form>
  )
}
