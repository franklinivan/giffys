/* global fetch */
const { VITE_API_KEY } = import.meta.env

export default function getGifs ({ keyword = 'gif' }) {
  const API_URL = `https://api.giphy.com/v1/gifs/search?api_key=${VITE_API_KEY}&q=${keyword}&limit=10&offset=0&rating=g&lang=en`

  return fetch(API_URL)
    .then(res => res.json())
    .then(({ data }) => data)
}
