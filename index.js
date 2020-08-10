const express = require('express')
const fs = require('fs');

const jsonStr = fs.readFileSync("./data/photos.json", "utf-8").toString()
const data = JSON.parse(jsonStr);
const app = express()
const port = 3000

function getRandomPhoto(){
    return Math.floor(Math.random() * (Object.keys(data.photos[0]).length + 1)) //satan
}

app.get('/', (req, res) => {
    res.send(data.photos[getRandomPhoto()])
})

app.listen(port, () => {
    console.log(`catAPI listening at http://localhost:${port}`)
})
