// general playground
var fs = require('fs');

var dir = process.cwd();
fs.readdir(dir, function(err, list) {
    console.log(list.length)
});
