import { GifsForm } from './components/GifsForm'
import { GifsList } from './components/GifsList'
import { GifDetails } from './components/GifDetails'
import { Route, Link } from 'wouter'
import './App.css'

function App () {
  return (
    <div className='App'>
      <header>
        <Link to='/'>Home</Link>
      </header>
      <section className='App-content'>
        <h4>Giffys</h4>
        <GifsForm />
        <Route path='/gif/:keyword' component={GifsList} />
        <Route path='/gif/:keyword/:id' component={GifDetails} />
      </section>
    </div>
  )
}

export default App
