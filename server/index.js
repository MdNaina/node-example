require("dotenv").config()
const express = require("express")
const cors = require("cors")


const app = express()
app.use(cors())
const PORT = process.env.PORT || 5000

app.use(express.static("public"))

app.get("/", (req, res) => {
    res.sendFile(__dirname+"public/index.html")
})

app.get("/version", (req, res) => {
    res.json({version: "v1.0.2", updated_date: "02-07-2022"})
})

app.get("/")

app.listen(PORT , () => console.log(`Server is Running on Port: ${PORT}`))