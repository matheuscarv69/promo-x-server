import App from './app';

let port = process.env.PORT || '3333';

App.server.listen(port, function () {
  console.log(`💻 Server executing in port: ${port}`);
  console.log(`🚀 Apollo Server ready at http://localhost:${port}/graphql`);
});