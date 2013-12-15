var express = require("express"),
        app = express();

app.configure(function () {
  app.engine('html', require('uinexpress').__express)
  app.set('view engine', 'html')
  app.set('view options', { layout: false });
});

// require('underscore-express')(app);

app.get('/', function(req, res, next) {
    res.render('index', {
        title: 'This is a test'
    });
});

app.listen(8000);
console.log('App listening at: http://localhost:8000/');