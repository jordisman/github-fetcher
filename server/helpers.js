const config = require('./config.js');
const request = require('request');

let getReposByUsername = (username, callback) => {
  let options = {
    url: `https://api.github.com/users/${username}/repos`,
    headers: {
      'User-Agent': 'request',
      'Authorization': `token ${config.TOKEN}`
    }
  };

  request.get(options, (err, res, body) => {
    if (err) {
      console.log('Failed:', err);
    } else {
      callback(JSON.parse(body));
    }
  });
}

module.exports.getReposByUsername = getReposByUsername;
