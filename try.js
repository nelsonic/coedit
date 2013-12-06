// general playground
var fs = require('fs');

var CWD = process.cwd(); // __filename.substring(0, __filename.lastIndexOf('/'));
console.log(CWD);
var newFile = new Date().getTime() +".txt",
    newFilePath = CWD+'/'+newFile;

fs.writeFile(newFilePath, "hello!", function (err) {
    if (err) console.log(err);
    // console.log("Created file: "+newFile);
    fs.readdir(CWD, function(err, list) {
        // console.log(list)
        console.log(list.indexOf(newFile) > -1)
        fs.unlink(newFilePath, function(err, data) {
            if (err) throw err;
            console.log('successfully deleted '+newFile);
            // console.log("Deleted: "+newFile)
            fs.readdir(CWD, function(err, list) {
                if (err) throw err;
                console.log(list.indexOf(newFile) === -1);
                // done()
            });
        });
    });
});


