import { useState } from 'react'

export const GifsForm = () => {
  const [value, setValue] = useState('')
  const [keyword, setKeyword] = useState('')

  const handleSubmit = e => {
    e.preventDefault()
    setKeyword(value)
  }

  return (
    <form onSubmit={handleSubmit}>
      <input onChange={({ target }) => setValue(target.value)} />
      <button>search gif</button>
    </form>
  )
}
