import "reflect-metadata";
import express from "express";
import { ApolloServer, gql } from "apollo-server-express";
import { buildSchema } from "type-graphql";
import { ProductResolver } from "./resolvers/ProductResolver";

class App {
  public server: express.Application;

  constructor() {
    this.server = express();

    this.startApolloServer();
  }

  async startApolloServer() {
    const app = this.server;

    const apolloServer = new ApolloServer({
      schema: await buildSchema({
        resolvers: [ProductResolver],
      })
    });

    apolloServer.applyMiddleware({ app });
  }

}

export default new App();