export default function ImageCard(prop) {
  const {images} = prop
  return (
    <div className="card">
      <p className="card__title">`TITLE: ${images.title}`</p>
      <p className="card__author">`BY: ${images.uploader}`</p>
      <img src={images.image} alt={images.title} />
    </div>
  );
}
