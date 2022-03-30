import { Link } from 'wouter'

export const Trend = ({ title }) => {
  return (
    <Link to={`/gif/${title}`}>
      <span>{title}</span>
    </Link>
  )
}
