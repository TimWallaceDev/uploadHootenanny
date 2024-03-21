import express from 'express'
import imageData from "../data/images.json" assert {type: "json"}


export const gallery = express.Router()


gallery.get("/:category", (req, res) => {
    //check body for category
    const {category} = req.params
    console.log(category)

    if (category === "all"){
        res.status(200).json(imageData)
    }
    else {
        const images = imageData.filter(image => image.category === category)
        res.status(200).json(images)
    }
})