require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes');

const app = express();

// Remove mongoose's "deprecation warnings"
mongoose.set('useNewUrlParser', true);
mongoose.set('useFindAndModify', false);
mongoose.set('useCreateIndex', true);
mongoose.set('useUnifiedTopology', true);

// Connect to the database
mongoose.connect(process.env.DB_CONNECTION_STRING);

app.use(express.json());
app.use('/api', routes);

module.exports = app;
