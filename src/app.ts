import express from "express";

class App {
  public server: express.Application;

  constructor() {
    this.server = express();

    this.routes();
  }

  routes() {
    this.server.route('/').get((req, res) => {
      res.send({
        Project: 'Promo-X-Server',
        Version: '1.0.0',
        Developer: 'Matheus Carvalho'
      });
    })
  }
}

export default new App();