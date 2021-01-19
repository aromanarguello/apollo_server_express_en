import express from "express";
import { ApolloServer, gql } from "apollo-server-express";

const typeDefs = gql`
  type Query {
    getName: String!
  }
`;

const resolvers = {
  Query: {
    getName: () => "Hello Alejandro!",
  },
};

const startServer = () => {
  const server = new ApolloServer({
    typeDefs,
    resolvers,
    playground: true,
    introspection: true,
  });

  const app = express();

  server.applyMiddleware({ app, path: "/graphql" });

  app.listen({ port: 4000 }, () => {
    console.log(`🚀 Server is ready at http://localhost:4000${server.graphqlPath}
    `);
  });
};

startServer();
