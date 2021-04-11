import App from './app'

let port = process.env.PORT || '3333';

App.app.listen(port, function () {
  console.log(`Server executing in port: ${port}`);

})