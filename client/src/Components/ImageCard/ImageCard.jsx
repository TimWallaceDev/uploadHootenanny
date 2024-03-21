export default function ImageCard(prop) {
  const {image} = prop
  console.log(image)
  return (
    <div className="card">
      <p className="card__title">TITLE: {image.title}</p>
      <p className="card__author">BY: {image.uploader}</p>
      <img src={`${image.image}`} alt={image.title} />
    </div>
  );
}
