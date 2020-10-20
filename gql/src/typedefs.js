const { gql } = require("apollo-server")
module.exports =  gql`
    type Query{
        hello: String!
        cats: [Cat!]!
        cat: Cat!
        catId(id: Int!): Cat!
    }
    type Cat{
        _id: Int
        url: String
        webpurl: String
        x: Float
        y: Float
    }

`