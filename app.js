// var express = require('express');
var app = require('express')(),
    ECT = require('ect');


app.get('/', function(req, res){
  res.send('Hello World');
});

app.listen(4000);