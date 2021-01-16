import { gql } from 'apollo-server'

export = gql`
    type Cat {
    id:      Int
    url:     String
    webpurl: String
    x:       Float
    y:       Float
  }
  
  type Query {
    cat: Cat
    catId(id: Int!): Cat
  }
`