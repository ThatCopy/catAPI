const { createTestClient } = require('apollo-server-testing');
const { ApolloServer, gql} = require("apollo-server")
require("dotenv").config()
const mongoose = require('mongoose');
const typeDefs = require("../src/typedefs")
const resolvers = require("../src/resolvers")



test('gql shit help me', async () => {
  const server = new ApolloServer({ typeDefs, resolvers });

  await mongoose.connect(process.env.MONGO, {useNewUrlParser: true, useUnifiedTopology: true})
  
  const app = createTestClient(server);
  
  const result = await app.query({query: gql`query getcat {
    catId(id: 1) {
      _id
      x
      y
      url
      webpurl
    }
  }
  `});

  expect(result.data.catId).toEqual({ "_id": 1, "x": 45.41, "y": 66.32, "url": "https://i.thatcopy.pw/cat/XwHHC9j.jpg", "webpurl": "https://i.thatcopy.pw/cat-webp/XwHHC9j.webp" });
});
