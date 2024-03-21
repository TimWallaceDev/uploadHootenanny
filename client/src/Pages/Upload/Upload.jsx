import axios from 'axios'
import { useRef, useState } from "react"
import "./Upload.scss"

const serverUrl = "http://localhost:3000/upload"

export function Upload() {

    const imagePreviewRef = useRef()
    const confirmRef = useRef()

    const [shareUrl, setShareUrl] = useState("")

    function handlePreview(e) {
        const file = e.target.files[0];

        // Ensure file is selected
        if (file) {
            const reader = new FileReader();

            // Set up event listener for when file is loaded
            reader.onload = function (e) {
                imagePreviewRef.current.src = e.target.result;
            }

            // Read the file as a data URL
            reader.readAsDataURL(file);
        }
    }

    async function handleUpload(e) {
        e.preventDefault()
        //get form data
        const title = e.target.title.value
        const uploader = e.target.name.value
        let category = e.target.category.value
        const image = e.target.uploadImage.files[0]

        const formData = new FormData()
        formData.append('title', title);
        formData.append('uploader', uploader);
        formData.append('image', image);
        formData.append('category', category);

        try {
            let response = await axios.post(serverUrl, formData)
            const url = response.data.image
            setShareUrl(url)
            console.log(url)
            confirmRef.current.style.display = "block"
            e.target.reset()
        } catch (err) {
            console.error(err)
        }

        console.log("image is being uploaded")
    }
    return (
        <>
            <section className="upload" onSubmit={handleUpload}>
                <h1 className="upload__heading">Upload Yer Image</h1>
                <form className="upload__form">
                    <label className="upload__label">Image Title</label>
                    <input className='upload__input' type="text" name="title" placeholder="Image Title"></input>

                    <label className="upload__label">Uploader Name</label>
                    <input className='upload__input' type="text" name="name" placeholder="Your Name"></input>

                    <label className="upload__label">Category</label>
                    <select className='upload__input' name="category">
                        <option value="horses">Horses</option>
                        <option value="saloon">Saloon</option>
                        <option value="wildlife">Wildlife</option>
                        <option value="wanted">Wanted Posters</option>
                        <option value="ghost">Ghost Towns</option>
                        <option value="other">Other</option>
                    </select>

                    <label className="upload__label">Choose Image</label>
                    <input className='upload__input upload__input--image' type="file" name="uploadImage" onChange={handlePreview}></input>
                    
                    <div className="upload__confirmation" ref={confirmRef}>
                        <h3 className="upload__confirmation-yee">Yeehaw! Upload's gone smooth as a prairie breeze</h3>
                        <p className="upload__url">Image URL : <span className="upload__image-url">  {shareUrl}</span></p>
                    </div>
                   
                    <img className="upload__preview" src="http://localhost:3000/empty.jpg" ref={imagePreviewRef}></img>

                    <button className="upload__button">Toss yer image up on there</button>
                </form>



            </section>
        </>
    )
}
