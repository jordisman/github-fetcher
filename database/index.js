const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/repo-fetcher', {useNewUrlParser: true, useUnifiedTopology: true});

let repoSchema = mongoose.Schema({
  id: Number,
  name: String,
  owner_login: String,
  avatar_url: String,
  html_url: String,
  description: String,
  stargazers_count: Number,
  forks_count: Number,
  archived_at: {type: Date, default: Date.now}
});

let Repo = mongoose.model('Repo', repoSchema);

module.exports.save = repo => {
  let newRepo = new Repo({
    id: repo.id,
    name: repo.name,
    owner_login: repo.owner.login,
    html_url: repo.html_url,
    description: repo.description,
    stargazers_count: repo.stargazers_count,
    forks_count: repo.forks_count
  });

  newRepo.save(err => {if (err) console.log('There is an error', err)});
}

module.exports.fetch = callback => {
  let cb = (err, repos) => { callback(repos) };
  Repo.find(cb).sort('-stargazers_count').limit(25);
}
