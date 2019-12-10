const db = require('../database/index.js');
const helpers = require('./helpers.js');
const bodyParser = require('body-parser');
const express = require('express');
const morgan = require('morgan');
const app = express();
const port = 3000;

app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(bodyParser.text());
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(__dirname + '/../client/dist'));

app.post('/repos', function (req, res) {
  let saveRepos = repos => repos.forEach(db.save);
  helpers.getReposByUsername(req.body.username, saveRepos);
  res.status(200).send('repos posted!');
});

app.get('/repos', function (req, res) {
  db.find(repos => {
    res.status(200).send(repos);
  });
});


app.listen(port, () => console.log(`listening to port ${port}`));