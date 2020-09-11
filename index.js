const express = require('express')
const fs = require('fs');

const jsonStr = fs.readFileSync("./data/photos.json", "utf-8").toString();
const jsonStrWebp = fs.readFileSync("./data/photos-webp.json", "utf-8").toString();
const data = JSON.parse(jsonStr);
const dataWebp = JSON.parse(jsonStrWebp);
const app = express();
const port = 3000;

function getRandomPhoto(){
    return Math.floor(Math.random() * data.photos.length);
}


app.get('/', (req, res) => {
    res.send(data.photos[getRandomPhoto()]);
})

app.get('/webp/', (req, res) => {
    res.send(dataWebp.photos[getRandomPhoto()]);
})

app.listen(port, () => {
    console.log(`catAPI listening at http://localhost:${port}`);
})
