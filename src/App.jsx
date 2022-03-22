import { useState } from 'react'
import { GifsForm } from './components/GifsForm'
import { GifsList } from './components/GifsList'
import './App.css'

function App () {
  const [keyword, setKeyword] = useState('')

  return (
    <div className='App'>
      <section className='App-content'>
        <GifsForm setKeyword={setKeyword} />
        <GifsList keyword={keyword} />
      </section>
    </div>
  )
}

export default App
