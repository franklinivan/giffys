import { useState } from 'react'
import { ListOfGifs } from './components/ListOfGifs'
import './App.css'
import { FormOfGif } from './components/FormOfGif'

function App () {
  const [keyword, setKeyword] = useState('')

  return (
    <div className='App'>
      <section className='App-content'>
        <FormOfGif setKeyword={setKeyword} />
        <ListOfGifs keyword={keyword} />
      </section>
    </div>
  )
}

export default App
