export const Gif = ({ title, url }) => {
  return (
    <div>
      <h4>{title}</h4>
      <img src={url} />
    </div>
  )
}
