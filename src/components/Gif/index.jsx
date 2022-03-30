import { Link } from 'wouter'
import './style.css'

export const Gif = ({ title, url, id, keyword }) => {
  return (
    <Link to={`/gif/${keyword}/${id}`}>
      <div className='Gif-list-item'>
        <img src={url} alt={title} />
        <p>{title}</p>
      </div>
    </Link>
  )
}
