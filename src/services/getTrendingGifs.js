/* global fetch */
const { VITE_API_KEY } = import.meta.env

const fromApiResponseToGifs = response => {
  const { data = [] } = response
  if (Array.isArray(data)) {
    return data.map(({ title }) => {
      return { title }
    })
  }
}
export function getTrendingGifs ({ limit = '5' } = {}) {
  const API_URL = `https://api.giphy.com/v1/gifs/trending?api_key=${VITE_API_KEY}&limit=${limit}&rating=g`

  return fetch(API_URL)
    .then(res => res.json())
    .then(data => fromApiResponseToGifs(data))
}
