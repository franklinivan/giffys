import { useState } from 'react'
import { ListOfGifs } from './components/ListOfGifs'
import './App.css'

function App () {
  const [keyword, setKeyword] = useState('')
  const [value, setValue] = useState('')

  const handleKeyword = e => setValue(e.target.value)

  const handleSubmit = e => {
    e.preventDefault()
    setKeyword(value)
  }

  return (
    <div className='App'>
      <section className='App-content'>
        <form onSubmit={handleSubmit}>
          <input type='text' onChange={handleKeyword} value={value} />
          <button>search gif</button>
        </form>
        <ListOfGifs keyword={keyword} />
      </section>
    </div>
  )
}

export default App
