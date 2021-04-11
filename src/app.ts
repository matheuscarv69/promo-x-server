import express from "express";

class App {
  public app: express.Application;

  constructor() {
    this.app = express();

    this.routes();
  }

  routes() {
    this.app.route('/').get((req, res) => {
      res.send({
        Project: 'Promo-X-Server',
        Version: '1.0.0',
        Developer: 'Matheus Carvalho'
      });
    })
  }
}

export default new App();