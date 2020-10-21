const mongoose = require('mongoose');
const Cat = require('../src/models/Cat');
require("dotenv").config();
const catData = {"_id":1,"webpurl":"https://i.thatcopy.pw/cat-webp/XwHHC9j.webp","url":"https://i.thatcopy.pw/cat/XwHHC9j.jpg","x":45.41,"y":66.32,"__v":0};

describe('Cat Model Test', () => {

    
    beforeAll(async done => {
        await mongoose.connect(process.env.MONGO, { useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true }, (err) => {
        done()
        });
    });

    it('Read a cat', async () => {
        const cat = await Cat.findById("1")
        expect(cat.x).toBe(catData.x);
        expect(cat.y).toBe(catData.y);
        expect(cat.url).toBe(catData.url);
        expect(cat.webpurl).toBe(catData.webpurl);
    })


    afterAll(done => {
        // Closing the DB connection allows Jest to exit successfully.
        mongoose.connection.close()
        done()
      })

    })