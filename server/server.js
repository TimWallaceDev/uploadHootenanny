import express from 'express'
import cors from 'cors'
import { upload } from './routes/upload.js'
import { gallery } from './routes/gallery.js'


let app = express()
const PORT = 3000

app.use(cors())
app.use(express.json())
app.use(express.static('public'))

app.use("/upload", upload)
app.use("/gallery", gallery)



app.listen(PORT, () => {
    console.log("Hootenanny on port ", PORT)
})