const db = require('../database/index.js');
const bodyParser = require('body-parser');
const express = require('express');
const app = express();
const port = 3000;

app.use(express.static(__dirname + '/../client/dist'));

app.use(bodyParser.text());



app.listen(port, () => console.log(`listening to port ${port}`));