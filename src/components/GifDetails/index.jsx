import { useGif } from '@/hooks/useGif'

export const GifDetails = ({ params }) => {
  const { keyword, id } = params
  const { getOneGif } = useGif({ keyword })
  const gif = getOneGif(id)

  return (
    <div>
      <h2>details</h2>
      {
        gif
          ? (
            <div>
              <p>{gif.title}</p>
              <img src={gif.url} />
            </div>
            )
          : null
      }
    </div>
  )
}
