var express = require('express');

var app = express();

app.post('/', function(request, response){
    console.log(request.body);      // your JSON
    response.status(200);
});

app.listen(3000);
