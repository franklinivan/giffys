import { Link } from 'wouter'
import './Gif.css'

export const Gif = ({ title, url, id, keyword }) => {
  return (
    <Link to={`/gif/${keyword}/${id}`}>
      <div className='Gif'>
        <h4>{title}</h4>
        <img src={url} alt={title} />
      </div>
    </Link>
  )
}
