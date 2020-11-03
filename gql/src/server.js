const { ApolloServer } = require("apollo-server")
require("dotenv").config()
const mongoose = require('mongoose');
const typeDefs = require("./typedefs")
const resolvers = require("./resolvers")
const Mongo = process.env.MONGO || require("../../env").mongodb

 async function startGqlServer(){
    const server = new ApolloServer({ typeDefs, resolvers });

    await mongoose.connect(Mongo, {useNewUrlParser: true, useUnifiedTopology: true})
    
    server.listen().then(({ url }) => {
        console.log(`🚀  Server ready at ${url}`)
    })
}

startGqlServer()
