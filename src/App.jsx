import './App.css'
import { Route, Link } from 'wouter'
import Home from './pages/Home'
import SearchResults from './pages/SearchResults'
import Details from './pages/Details'

function App () {
  return (
    <section className='App-content'>
      <Link to='/'>
        Home
      </Link>
      <Route path='/' component={Home} />
      <Route path='/:keyword' component={SearchResults} />
      <Route path='/:keyword/:id' component={Details} />
    </section>
  )
}

export default App
