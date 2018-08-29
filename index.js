const app = require('./app');
const port = parseInt(process.env.PORT || 8080);

app.listen(port)
  .on('error', () => console.error(console))
  .on('listening', () => {console.log(`Error Error Error, We have an Error ${port}`)});