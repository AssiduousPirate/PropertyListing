require("./app/models/config")
require("./app/routes/app")
const PORT = process.env.PORT || 8080
const express = require("express")
const cors = require("cors")
const bodyparser = require("body-parser")
const app = express()
let corsOptions = {
    origin: "http://localhost:3000/"
}
app.use(cors(corsOptions))
app.use(bodyparser.json())
app.use(bodyparser.urlencoded({ extended: true}))
app.get("/", (req, res) => {
    res.json({
        message: "Welcome to the Property Lisitng Site!"
    })
})
app.listen(PORT, () => {
    console.log(`Server is running on the port ${PORT}.`)
})