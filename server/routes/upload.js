import express from 'express'
import {v4 as uuid} from 'uuid'
import multer from 'multer'
import path from "path"
import images from "../data/images.json" assert {type: "json"}
import fs from 'fs'

export const upload = express.Router()

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'public/uploads/')
    },
    filename: function (req, file, cb) {
        cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname))
    }
});

const imageHandler = multer({ storage: storage });

upload.post("/", imageHandler.single("image"), (req, res) => {
    console.log("posting new video")
    if (!req.file) {
        return res.status(400).send('No files were uploaded.');
    }
    const { title, uploader, category } = req.body
    const newImage = {
        "id": uuid(),
        "title": title,
        "uploader": uploader,
        "category": category,
        "image": "http://localhost:3000/uploads/" + req.file.filename,
    }

    //create new video list
    let updatedImages = [...images, newImage]
    //add new video to video details
    fs.writeFileSync("./data/images.json", JSON.stringify(updatedImages))
    res.status(201).json(newImage)
})