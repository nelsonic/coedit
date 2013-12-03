// general playground
var fs = require('fs');

var runCountFile = "./test/runCount.txt";
fs.readFile(runCountFile, 'utf8', function read(err, data) {
    if(err) {
        throw err;
    }
    
    var runCount = parseInt(data,10);
    console.log("Run Count: "+runCount);

    fs.writeFile(runCountFile , runCount + 1, function(err) {
        if(err) {
            console.log(err);
        } else {
            fs.readFile(runCountFile, 'utf8', function read(err, data) {
                var runCount = parseInt(data,10);
                console.log("Run Count Updated: "+runCount);
            });
        }
    });

});