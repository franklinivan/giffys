import './App.css'
import { Route, Link } from 'wouter'
import Home from './pages/Home'
import SearchResults from './pages/SearchResults'
import Details from './pages/Details'

function App () {
  return (
    <div className='App'>
      <section className='App-content'>
        <Link to='/'>
          <h3>home</h3>
        </Link>
        <Route path='/' component={Home} />
        <Route path='/gif/:keyword' component={SearchResults} />
        <Route path='/gif/:keyword/:id' component={Details} />
      </section>
    </div>
  )
}

export default App
