var chai = require('chai');
var assert = chai.assert; 
// var C = require('../cash.js');  // our module
var fs = require('fs');


// describe('Another set of tests', function(){
//   describe('my tests', function(){
//     xit('READ ./test/runCount.txt & runCount is number', function(){
//         assert.isTrue(true);
//     });
//   })
// }) // end node env checks



describe('Node.js Environment Checks', function(){
  describe('Basic IO', function(){
    it('VIEW files in current working directory (CWD)', function(){
        var dir = process.cwd();
        fs.readdir(dir, function(err, list) {
            // console.log(list);
            assert.isTrue(list.length > 0);
        });
    })

    it('READ ./test/runCount.txt & runCount is number', function(){
        fs.readFile('./test/runCount.txt', 'utf8', function read(err, data) {
            if (err) {
                throw err;
            }
            // console.log(data);
            var runCount = parseInt(data,10)
            assert.isTrue( typeof runCount === 'number');
        });
    })

    it('WRITE to (increment) ./test/runCount.txt', function(){
        var runCountFile = "./test/runCount.txt";
        fs.readFile(runCountFile, 'utf8', function read(err, data) {
            if (err) {
                throw err;
            }
            var runCount = parseInt(data,10);
            // increment the runCount
            fs.writeFile(runCountFile, runCount + 1, function(err) {
                if(err) {
                    console.log(err);
                } else {
                    fs.readFile(runCountFile, 'utf8', function read(err, data) {
                        var runCountIncremented = parseInt(data,10);
                        console.log("Run Count Updated: "+runCount +' | '+runCountIncremented);
                        // confirm we have incremented the runCount:
                        assert.isTrue(runCountIncremented === runCount + 1);

                    }); // end inner fs.readFile
                } // end else
            }); // end fs.writeFile
        }); // end fs.readFile
    })

    it('CREATE ./test/tmp/+timestamp.txt (temporary) file', function(){
        // setup
        var timestamp   = new Date().getTime(),
            testDir     = "./test/tmp/";
            newFile     = timestamp+".txt";
            newFilePath = testDir+newFile;

        fs.writeFile(newFilePath, "hello!", function (err) {
            if (err) throw err;
            // console.log("Created file: "+newFile);
            fs.readdir(testDir, function(err, list) {
                // console.log(list)
                assert.isTrue(list.indexOf(newFile) > -1)
                fs.readFile(newFilePath, 'utf8', function read(err, data) {
                    assert.isTrue(String(data) === "hello!");
                    // fs.unlink(newFilePath, function(err, data) {
                    //     if (err) throw err;
                    //     // console.log("Deleted: "+newFile)
                    //     fs.readdir(testDir, function(err, list) {
                    //         if (err) throw err;
                    //         assert.isTrue(list.indexOf(newFilePath) === -1);
                    //     });
                    // })
                })
            });
        });
    })
  })
}) // end node env checks