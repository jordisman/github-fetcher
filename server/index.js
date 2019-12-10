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
  // console.log('req.body.owner:', req.body);
  helpers.getReposByUsername(req.body.username, (repos) => {
    // console.log('app.post-repos:', repos);
    let data = repos.map(repo => {
      // console.log('repo:', repo);
      return ({
        id: repo.id,
        userName: repo.owner.login,
        repoName: repo.name,
        html_url: repo.html_url,
        created_at: repo.created_at
      })
    })
    // console.log('data', data);
    db.save(data, () => {
      res.status(200).send(repos);
    });

  });
});


app.get('/repos', function (req, res) {
  db.find(repos => {
    res.status(200).send(repos);
  });
});


app.listen(port, () => console.log(`listening to port ${port}`));