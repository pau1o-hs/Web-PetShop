require('dotenv').config();

const { env } = process;

const express = require('express');
const routes = require('./routes');

const port = env.PORT || 8080;

const app = express();
app.use(express.json());
app.use('/api', routes);

app.listen(port, () => {
  console.log(`Server is running on port ${port}!`);
});
