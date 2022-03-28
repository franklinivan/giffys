import { useLocation, Link } from 'wouter'
import './style.css'

export const Gif = ({ title, url, id }) => {
  const [path, setLocation] = useLocation() // eslint-disable-line
  return (
    <Link to={`${path}/${id}`}>
      <div className='Gif-list-item'>
        <h2>{title}</h2>
        <img src={url} alt={title} />
      </div>
    </Link>
  )
}
