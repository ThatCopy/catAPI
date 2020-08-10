const express = require('express')
const fs = require('fs');

const jsonStr = fs.readFileSync("./data/photos.json", "utf-8").toString();
const data = JSON.parse(jsonStr);
const app = express();

function getRandomPhoto(){
    return Math.floor(Math.random() * data.photos.length);
}


app.get('/', (req, res) => {
    res.send(data.photos[getRandomPhoto()]);
})

app.listen(process.env.PORT || 3000, () => {
    console.log(`catAPI listening at http://localhost:${port}`);
})
