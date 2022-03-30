import { GifDetails } from '@/components/GifDetails'
import { useContext } from 'react'
import StaticContext from '@/context/StaticContext'

export default function Details ({ params }) {
  const context = useContext(StaticContext)
  return <GifDetails params={params} />
}
