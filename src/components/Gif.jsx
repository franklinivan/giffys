import { Link } from 'wouter'
import './Gif.css'

export const Gif = ({ title, url }) => {
  return (
    <Link to='/gif/sleep'>
      <div className='Gif'>
        <h4>{title}</h4>
        <img src={url} alt={title} />
      </div>
    </Link>
  )
}
