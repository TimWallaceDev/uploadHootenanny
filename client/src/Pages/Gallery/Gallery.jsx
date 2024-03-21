import { useEffect, useState } from "react"
import { useParams, useNavigate } from "react-router-dom"
import ImageCard from "../../Components/ImageCard/ImageCard"
import './Gallery.scss';
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

    function handleSubmit(e) {
        e.preventDefault()
        console.log("searching for images")
        const category = e.target.category.value
        navigate("/gallery/" + category)
    }

    if (images === null) {
        return (
            <h1>loading</h1>
        )
    }


    return (
        <div className="gallery">
            <h1 className="gallery-header">Take a gander at them photos</h1>
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
            <div className="cards">
                {images.map((image) => {
                    return <ImageCard image={image} />;
                })}
                {images.length > 0 || <h2 className="no-images">No sights of pictures here, partner</h2>}
            </div>

        </div>
    )
}
