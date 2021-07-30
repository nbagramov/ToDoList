const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const app = express();
const apiRoutes = require('./modules/routes');
import dotenv from 'dotenv';

dotenv.config();
app.use(cors());

const url = 'mongodb+srv://user:user@cluster0.ibhda.mongodb.net/ToDo';
mongoose.connect(url,  { useNewUrlParser: true, useUnifiedTopology: true }).then();

app.use(bodyParser.json());
app.use('/', apiRoutes);

export default app;
