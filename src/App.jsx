import { GifsForm } from './components/GifsForm'
import { GifsList } from './components/GifsList'
import { Route, Link } from 'wouter'
import './App.css'

function App () {
  return (
    <div className='App'>
      <section className='App-content'>
        <h4>Giffys</h4>
        <GifsForm />
        <Route path='/gif/:keyword' component={GifsList} />
        <Link to='/gif/panda'>panda</Link>
      </section>
    </div>
  )
}

export default App
