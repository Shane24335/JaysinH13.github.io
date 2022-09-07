var express = require('express');
var app = express()
const PORT = 42069
const fs = require('fs');
app.use(express.static('public'))
app.use('/css', express.static(__dirname + 'public/css'))
app.set('view engine', 'ejs')


app.get('/', function (req, res) {
    res.render('index');
  });

  


  var server = app.listen(PORT, function () {
    var host = server.address().address;
    var port = server.address().port;
    console.log(`Congrats! Server is running on ${PORT}`);
  });