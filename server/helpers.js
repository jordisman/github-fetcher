const config = require('./config.js');
const request = require('request');

module.exports.getRepoByUser = (username, cb) => {
  let options = {
    url: `https://api.github.com/users/${username}/repos`,
    headers: {
      'User-Agent': 'request',
      'Authorization': `token ${config.TOKEN}`
    }
  };

  request(options, (err, res, body) => {
    cb(JSON.parse(body));
  });
}
