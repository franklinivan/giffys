import { GifsForm } from '../../components/GifsForm'
import { GifsList } from '../../components/GifsList'

export default function SearchResults ({ params }) {
  return (
    <>
      <GifsForm />
      <GifsList params={params} />
    </>
  )
}
