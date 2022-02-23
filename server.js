// server.js
// where your node app starts

// init project
require('dotenv').config();
var express = require('express');
var app = express();
var axios = require('axios')
// enable CORS (https://en.wikipedia.org/wiki/Cross-origin_resource_sharing)
// so that your API is remotely testable by FCC 
var cors = require('cors');
app.use(cors({optionsSuccessStatus: 200}));  // some legacy browsers choke on 204

// http://expressjs.com/en/starter/static-files.html
app.use(express.static('public'));

// http://expressjs.com/en/starter/basic-routing.html
app.get("/", function (req, res) {
  res.sendFile(__dirname + '/views/index.html');
});


// your first API endpoint... 
app.get("/api/hello", function (req, res) {
  res.json({greeting: 'hello API'});
});

app.get("/api/whoami", async (req,res) => {
  return res.send({
    language: req.headers["accept-language"],
    software: req.headers["user-agent"],
    ipaddress:req.headers["x-forwarded-for"],
    yourISP: await axios.get('http://ip-api.com/json/67.190.193.112')
  .then((response) => response.data.isp),
    thelastvideoyouwatchedonpornhub: 'https://www.pornhub.com/view_video.php?viewkey=ph5d60751bac458&t=2&utm_medium=embed&utm_campaign=embed-title-html5 👀'
  })
})



// listen for requests :)
var listener = app.listen(process.env.PORT, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});
