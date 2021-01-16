import { ApolloServer, gql } from 'apollo-server'
import typeDefs from "./typedefs"
import resolvers from "./resolvers"

const server = new ApolloServer({ typeDefs, resolvers });

// The `listen` method launches a web server.
server.listen().then(() => {
  console.log(`🚀  Server ready at http://localhost:4000`);
});