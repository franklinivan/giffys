import { createContext } from 'react'

const StaticContext = createContext({
  name: 'Franko',
  someInfo: 'developer',
  active: true
})

export default StaticContext
