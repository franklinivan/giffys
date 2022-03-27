/* global fetch */
const { VITE_API_KEY } = import.meta.env

const fromApiResponseToGifs = response => {
  const { data = [] } = response
  if (Array.isArray(data)) {
    return data.map(({ id, title, images }) => {
      const { url } = images.downsized_medium
      return { id, title, url }
    })
  }
}

export function getGifs ({ keyword = 'random', limit = '15' } = {}) {
  const API_URL = `https://api.giphy.com/v1/gifs/search?api_key=${VITE_API_KEY}&q=${keyword}&limit=${limit}&offset=0&rating=g&lang=en`

  return fetch(API_URL)
    .then(res => res.json())
    .then(data => fromApiResponseToGifs(data))
}
