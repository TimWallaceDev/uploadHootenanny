import { useEffect, useState } from "react"
import { useParams, useNavigate } from "react-router-dom"


import axios from "axios"

export function Gallery() {
    const serverUrl = "http://localhost:3000/gallery"
    const { category } = useParams()

    const [images, setImages] = useState(null)
    let navigate = useNavigate()

    useEffect(() => {

        async function getAllImages() {
            //request all images
            const response = await axios.get(serverUrl + "/" + category)
            console.log(response)
            setImages(response.data)
        }
        getAllImages()
    }, [category])

    function handleSubmit(e){
        console.log("searching for images")
        const category = e.target.category.value
        navigate("/gallery/" + category)
    }


    return (
        <>
            <h1>Take a gander at them photos</h1>
            <form className="gallery__form" onSubmit={handleSubmit}>
                <label className="gallery__label">Category</label>
                <select name="category">
                    <option value="horses">Horses</option>
                    <option value="saloon">Saloon</option>
                    <option value="wildlife">Wildlife</option>
                    <option value="wanted">Wanted Posters</option>
                    <option value="ghost">Ghost Towns</option>
                    <option value="other">Other</option>
                </select>
                <button className="gallery_button">Sift out the images</button>
            </form>
            {images.map((image) => {
        return <ImageCard images={images} />;
      })}
        </>
    )
}
