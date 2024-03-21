import express from 'express'


export const gallery = express.Router()


gallery.get("/:category", (req, res) => {
    //check body for category

    //send images
    res.status(200).send("Heres the images")
})