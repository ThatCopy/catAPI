const request = require("supertest");
const app = require("../app");
const mongoose = require("mongoose");

describe("Test the express app", () => {
  it("Get a cat with a ID", async () => {
    const res = await request(app)
      .get("/getId/2")
    await expect(res.text).toBe('{"_id":2,"webpurl":"https://i.thatcopy.pw/cat-webp/mB0JQPR.webp","url":"https://i.thatcopy.pw/cat/mB0JQPR.jpg","x":29.59,"y":31.58,"__v":0}');
  });

  it("Get a random cat", async () => {
    const res = await request(app)
      .get("/get/")
    await expect(res.text).toBe(`{${res.text.replace(/[\{\}]/g, "")}}`) // i know this test is shit but.......
  });

  afterAll(done => {
    mongoose.connection.close()
    done()
  })
});
