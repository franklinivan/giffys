import { useLocation, Link } from 'wouter'
import './Gif.css'

export const Gif = ({ title, url, id }) => {
  const [path, setLocation] = useLocation() // eslint-disable-line
  return (
    <Link to={`${path}/${id}`}>
      <div className='Gif'>
        <h4>{title}</h4>
        <img src={url} alt={title} />
      </div>
    </Link>
  )
}
