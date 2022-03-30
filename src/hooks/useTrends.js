import { getTrendingGifs } from '@/services/getTrendingGifs'
import { useState, useEffect } from 'react'

export const useTrends = () => {
  const [trends, setTrends] = useState([])

  useEffect(() => {
    getTrendingGifs().then(trends => setTrends(trends))
  }, [])

  return { trends }
}
