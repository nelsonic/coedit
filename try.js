// general playground
var fs = require('fs');

var newFile = new Date().getTime() +".txt";

fs.writeFile(newFile, "hello!", function (err) {
    if (err) console.log(err);
    // console.log("Created file: "+newFile);
    fs.readdir(__dirname, function(err, list) {
        // console.log(list)
        console.log(list.indexOf(newFile) > -1)
        fs.unlink(newFile, function(err, data) {
            if (err) throw err;
            console.log('successfully deleted '+newFile);
            // console.log("Deleted: "+newFile)
            fs.readdir(__dirname, function(err, list) {
                if (err) throw err;
                console.log(list.indexOf(newFile) === -1);
                // done()
            });
        });
    });
});