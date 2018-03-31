const express = require('express'),
      request = require('request');

const app = express();  

//define port
const port = 3000;

app.all('/*', function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "X-Requested-With");
  next();
});

// Forward all requests from / to https://api.odds.gg/matches/sport/144
app.use('/', function(req, res) {
  req.pipe(request("https://api.odds.gg/matches/sport/144" + req.url)).pipe(res);
});

app.listen(process.env.PORT || port);

