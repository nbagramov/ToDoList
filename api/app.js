const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const app = express();
const apiRoutes = require('./modules/routes');

app.use(cors());

const url = "mongodb+srv://user:user@cluster0.ibhda.mongodb.net/ToDo?retryWrites=true&w=majority";
mongoose.connect(url,  { useNewUrlParser: true, useUnifiedTopology: true }).then();

app.use(bodyParser.json());
app.use('/', apiRoutes);

module.exports = app;
