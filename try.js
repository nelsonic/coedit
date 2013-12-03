// general playground
var fs = require('fs');

fs.readFile('./test/run-count.txt', 'utf8', function read(err, data) {
    if (err) {
        throw err;
    }
    console.log(data);
});