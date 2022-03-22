export const Gif = ({ title, url }) => {
  return (
    <>
      <h4>{title}</h4>
      <img src={url} />
    </>
  )
}
