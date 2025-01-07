var https = require('follow-redirects').https;
var fs = require('fs');

require('dotenv').config();
const apiKey = process.env.API_KEY;

var options = {
  'method': 'GET',
  'hostname': 'v1.hockey.api-sports.io',
  'path': '/leagues',
  'headers': {
    'x-rapidapi-key': apiKey,
    'x-rapidapi-host': 'v1.hockey.api-sports.io'
  },
  'maxRedirects': 20
};

var req = https.request(options, function (res) {
  var chunks = [];

  res.on("data", function (chunk) {
    chunks.push(chunk);
  });

  res.on("end", function (chunk) {
    var body = Buffer.concat(chunks);
    console.log(body.toString());
  });

  res.on("error", function (error) {
    console.error(error);
  });
});

req.end();