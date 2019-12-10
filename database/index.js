const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/repo-fetcher', {useNewUrlParser: true, useUnifiedTopology: true});

let repoSchema = mongoose.Schema({
  id: Number,
  userName: String,
  repoName: String,
  html_url: {type: String, unique: true},
  created_at: Date
});
