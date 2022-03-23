import { useGif } from '../hooks/useGif'

export const GifDetails = ({ params }) => {
  const { keyword, id } = params
  const { getOneGif } = useGif({ keyword })

  const getGif = getOneGif(id)
  console.log({ getGif })
  return (
    <div>
      <h2>details</h2>
    </div>
  )
}
