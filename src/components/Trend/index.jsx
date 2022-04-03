import { Link } from 'wouter'

export const Trend = ({ title }) => {
  return (
    <Link to={`/${title}`}>
      <span>{title}</span>
    </Link>
  )
}
