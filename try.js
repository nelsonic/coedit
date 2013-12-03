// general playground
var fs = require('fs');

var timestamp   = new Date().getTime(),
    testDir     = "./test/tmp/";
    newFile     = timestamp+".txt";
    newFilePath = testDir+newFile;

fs.writeFile(newFilePath, "hello!", function (err) {
    if (err) throw err;
    // console.log("Created file: "+newFile);
    fs.readdir(testDir, function(err, list) {
        console.log(list)
        console.log(list.indexOf(newFile) > -1)
        fs.readFile(newFilePath, 'utf8', function read(err, data) {
            console.log(String(data) === "hello!");
            fs.unlink(newFilePath, function(err, data) {
                if (err) throw err;
                // console.log("Deleted: "+newFile)
                fs.readdir(testDir, function(err, list) {
                    if (err) throw err;
                    console.log(list.indexOf(newFilePath) === -1);
                });
            })
        })
    });
});