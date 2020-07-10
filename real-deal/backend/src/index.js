const express = require('express');
const Routes = require('./routes');
require('dotenv').config();

const { env } = process;
const port = env.PORT || 8080;

const app = express();
app.use(express.json());
app.use('/api', Routes);

app.listen(port, () => {
  console.log(`Server is running on port ${port}!`);
});
