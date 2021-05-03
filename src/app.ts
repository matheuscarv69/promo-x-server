import "reflect-metadata";
import express from "express";
import cors from "cors";
import { ApolloServer } from "apollo-server-express";
import { buildSchema } from "type-graphql";

import './database/postgres/Connect';
import MongoDb from "./database/mongodb/MongoDb";
import { ProductResolver } from "./resolvers/ProductResolver";
import { UserResolver } from "./resolvers/UserResolver";

class App {
  public server: express.Application;
  private mongodb: MongoDb;

  constructor() {
    this.server = express();
    this.mongodb = new MongoDb();
    this.mongodb.createConnection();

    this.enableCors();
    this.startApolloServer();
  }

  enableCors() {
    const options: cors.CorsOptions = {
      methods: "POST, OPTIONS",
      origin: "*"
    }

    this.server.use(cors(options));
  }

  async startApolloServer() {
    const app = this.server;

    const apolloServer = new ApolloServer({
      schema: await buildSchema({
        resolvers: [ProductResolver, UserResolver],
      }),
      // context: ({ req, res }) => ({ req, res }),
      // playground: true
    });

    apolloServer.applyMiddleware({ app });
  }

}

export default new App();