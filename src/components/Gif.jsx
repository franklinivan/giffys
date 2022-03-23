import { Link } from 'wouter'
import './Gif.css'

export const Gif = ({ title, url, id }) => {
  return (
    <Link to={`/gif/detail/${id}`}>
      <div className='Gif'>
        <h4>{title}</h4>
        <img src={url} alt={title} />
      </div>
    </Link>
  )
}
