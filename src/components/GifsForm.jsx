import { useState } from 'react'

export const GifsForm = ({ setKeyword }) => {
  const [value, setValue] = useState('')

  const handleSubmit = e => {
    e.preventDefault()
    setKeyword(value)
  }

  return (
    <form onSubmit={handleSubmit}>
      <input onChange={e => setValue(e.target.value)} />
      <button>search gif</button>
    </form>
  )
}
