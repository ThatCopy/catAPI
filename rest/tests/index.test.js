// const request = require("supertest");
// const app = require("../app");

// describe("Test the catId path", () => {
//   test("It should response the GET method", done => {
//     request(app)
//       .get("/getId/2")
//       .then(response => {
//         expect(response.text).toBe('{"_id":2,"webpurl":"https://i.thatcopy.pw/cat-webp/mB0JQPR.webp","url":"https://i.thatcopy.pw/cat/mB0JQPR.jpg","x":29.59,"y":31.58,"__v":0}');
//         done();
//       });
//   });
// });

const request = require("supertest");
const app = require("../app");

describe("Test the root path", () => {
  test("It should response the GET method", () => {
    return request(app)
      .get("/getId/2")
      .then(response => {
        expect(response.text).toBe('{"_id":2,"webpurl":"https://i.thatcopy.pw/cat-webp/mB0JQPR.webp","url":"https://i.thatcopy.pw/cat/mB0JQPR.jpg","x":29.59,"y":31.58,"__v":0}');
      });
  });
});
