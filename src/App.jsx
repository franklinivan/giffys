import './App.css'
import { Route, Link } from 'wouter'
import Home from './pages/Home'
import SearchResults from './pages/SearchResults'
import Details from './pages/Details'
import StaticContext from './context/StaticContext'

const CONTEXT = {
  name: 'la de gymbo',
  someInfo: 'developer',
  active: 'hell yeah'
}

function App () {
  return (
    <StaticContext.Provider value={CONTEXT}>
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
    </StaticContext.Provider>
  )
}

export default App
