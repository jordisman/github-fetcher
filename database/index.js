const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/repo-fetcher', {useNewUrlParser: true, useUnifiedTopology: true});

let repoSchema = mongoose.Schema({
  id: Number,
  userName: String,
  repoName: String,
  html_url: {type: String, unique: true},
  created_at: Date
});

let Repo = mongoose.model('Repo', repoSchema);

let save = (repo, callback) => {
  Repo.insertMany(repo, (err, data) => {
    if (err) {
      console.log('Failed to save:', err);
    } else {
      callback();
      console.log('Saved successfully!');
    }
  });
}

let find = (callback) => {
  Repo.find({}, (err, foundRepos) => {
    if(err) {
      console.log('err:', err);
    } else {
      console.log('foundRepos[0]', foundRepos[0])
      callback(foundRepos);
    }
  })
  // .sort('-created_at')
  .sort({_id: -1})
  .limit(25);
}

module.exports.save = save;
module.exports.find = find;
