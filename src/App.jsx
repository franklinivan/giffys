import { GifsForm } from './components/GifsForm'
import { GifsList } from './components/GifsList'
import { GifDetails } from './components/GifDetails'
import { Route } from 'wouter'
import './App.css'

function App () {
  return (
    <div className='App'>
      <section className='App-content'>
        <h4>Giffys</h4>
        <GifsForm />
        <Route path='/gif/:keyword' component={GifsList} />
        <Route path='/gif/detail/:id' component={GifDetails} />
      </section>
    </div>
  )
}

export default App
