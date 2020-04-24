var express = require('express');
var app = express();

app.post('/v1/sms', function(req, res){
  console.log({
    Url: req.baseUrl,
    Body: req.body,
    Headers: req.headers,
    Status: req.statusCode,
    StatusMessase: req.statusMessage
  });

  res.status(200).send();
});

app.listen(3000, function(){
  console.log('Example app listening on port 3000!');
});