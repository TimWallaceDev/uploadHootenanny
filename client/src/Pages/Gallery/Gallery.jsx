import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ImageCard from "../../Components/ImageCard/ImageCard";
import axios from "axios";

export function Gallery() {
  const serverUrl = "http://localhost:3000/gallery";
  const { category } = useParams();

  const [images, setImages] = useState(null);
  useEffect(() => {
    async function getAllImages() {
      //request all images
      const response = await axios.get(serverUrl + "/" + category);
      console.log(response);
      setImages(response.data);
    }
    getAllImages();
  }, [category]);

  return (
    <div>
      <h1>Take a gander at them photos</h1>
      {images.map((image) => {
        return <ImageCard images={images} />;
      })}
    </div>
  );
}
