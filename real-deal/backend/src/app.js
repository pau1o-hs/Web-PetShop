require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const routes = require('./routes');
const populateDb = require('./populate');

const app = express();

// Remove mongoose's "deprecation warnings"
mongoose.set('useNewUrlParser', true);
mongoose.set('useFindAndModify', false);
mongoose.set('useCreateIndex', true);
mongoose.set('useUnifiedTopology', true);

// Connect to the database
mongoose.connect(process.env.DB_CONNECTION_STRING).then(async () => {
  await populateDb();
});

app.use(cors());

app.use(express.json());
app.use('/api', routes);

module.exports = app;
