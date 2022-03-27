import { useLocation, Link } from 'wouter'

export const Gif = ({ title, url, id }) => {
  const [path, setLocation] = useLocation() // eslint-disable-line
  return (
    <Link to={`${path}/${id}`}>
      <div className='Gif-list-item'>
        <h4>{title}</h4>
        <img src={url} alt={title} />
      </div>
    </Link>
  )
}
