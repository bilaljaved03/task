// server/server.js
const app = require('./app');
// const { PORT } = require('./config/config');

app.listen(8000, () => {
  console.log(`Server is running on port ${8000}`);
});
