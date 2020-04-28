'use strict';
require('dotenv').config();
const cors = require('cors');
const express = require('express');
const app = express();
const port = 3000;
const picRoute = require('./routes/picRoute');

app.use(cors());
app.use(express.json()); // for parsing application/json
app.use(express.urlencoded({extended: true})); // for parsing app
app.use(express.static('public'));
app.use(express.static('uploads'));

app.use('/pic', picRoute);

app.listen(port, () => console.log(`Example app listening on port ${port}!`));