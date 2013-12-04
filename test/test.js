var chai   = require('chai');
var assert = chai.assert; 
var fs     = require('fs');


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

    // it('CREATE (temporary) file tests create/write access to FS', function(done){
    //     // setup
    //     var newFile = new Date().getTime() +".txt";

    //     fs.writeFile(newFile, "hello!", function (err) {
    //         if (err) console.log(err);
    //         // console.log("Created file: "+newFile);
    //         fs.readdir(__dirname, function(err, list) {
    //             // console.log(list)
    //             assert.isTrue(list.indexOf(newFile) > -1)
    //             fs.unlink(newFile, function(err, data) {
    //                 if (err) throw err;
    //                 // console.log("Deleted: "+newFile)
    //                 fs.readdir(testDir, function(err, list) {
    //                     if (err) throw err;
    //                     assert.isTrue(list.indexOf(newFilePath) === -1);
    //                     done();
    //                 });
    //             })
    //         });
    //     });
    // })
    it('CREATE (temporary) file tests create/write access to FS', function(done){
        // setup
        var newFile = new Date().getTime() +".txt";

        fs.writeFile(newFile, "hello!", function (err) {
            if (err) console.log(err);
            // console.log("Created file: "+newFile);
            fs.readdir(__dirname, function(err, list) {
                // console.log(list)
                assert.isTrue(list.indexOf(newFile) > -1)

                fs.unlink(newFile, function(err, data) {
                    if (err) throw err;
                    console.log('successfully deleted '+newFile);
                    // console.log("Deleted: "+newFile)
                    fs.readdir(__dirname, function(err, list) {
                        if (err) throw err;
                        assert.isTrue(list.indexOf(newFile) === -1);
                        done()
                    });
                });
            });
        });
    })
  })
}) // end node env checks