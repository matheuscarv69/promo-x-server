import "dotenv/config";
import App from './app';

let port = process.env.PORT || '3333';
let profile = process.env.NODE_ENV;

App.server.listen(port, function () {
  console.log(`👤 Profile: ${profile}`);
  console.log(`💻 Server executing in port: ${port}`);
  console.log(`🚀 Apollo Server ready at http://localhost:${port}/graphql`);
});