export const Gif = ({ title, images }) => {
  const { url } = images.downsized_medium
  return (
    <div>
      <h4>{title}</h4>
      <img src={url} />
    </div>
  )
}
