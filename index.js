var express = require('express');

var app = express();

app.use(express.json());

app.post('/', function(request, response){
    console.log(request.body);      // your JSON
    response.status(200).send(request.body);
});

app.listen(3000);
