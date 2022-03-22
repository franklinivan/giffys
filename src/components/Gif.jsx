import './Gif.css'

export const Gif = ({ title, url }) => {
  return (
    <div className='Gif'>
      <h4>{title}</h4>
      <img src={url} alt={title} />
    </div>
  )
}
