import { useState } from 'react'
import { Link } from 'wouter'

export const GifsForm = () => {
  const [value, setValue] = useState('')

  return (
    <div>
      <input onChange={({ target }) => setValue(target.value)} value={value} />
      <Link to={`/gif/${value}`}>search gif</Link>
    </div>
  )
}
