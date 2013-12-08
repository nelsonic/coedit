var assert = require('assert'); 
var fs     = require('fs');

describe('Node.js Environment Checks', function(){
  describe('Basic IO', function(){
    it('VIEW files in current working directory (CWD)', function(){
        var dir = process.cwd();
        fs.readdir(dir, function(err, list) {
            // console.log(list);
            assert(list.length > 0);
        });
    })

    it('READ ./test/runCount.txt & runCount is number', function(){
        fs.readFile('./test/runCount.txt', 'utf8', function read(err, data) {
            if (err) {
                throw err;
            }
            // console.log(data);
            var runCount = parseInt(data,10)
            assert( typeof runCount === 'number');
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
                        // console.log("Run Count Updated: "+runCount +' | '+runCountIncremented);
                        // confirm we have incremented the runCount:
                        assert(runCountIncremented === runCount + 1);
                    }); // end inner fs.readFile
                } // end else
            }); // end fs.writeFile
        }); // end fs.readFile
    })

    it('CREATE (temporary) file tests create/write access to FS', function(done){
        // setup
        var CWD = process.cwd(); //__filename.substring(0, __filename.lastIndexOf('/'));
        // console.log(CWD);
        var newFile = new Date().getTime() +".txt",
            newFilePath = CWD+'/tmp/'+newFile;
        fs.writeFile(newFilePath, "hello!", function (err) {
            if (err) console.log(err);
            // console.log("Created file: "+newFile);
            fs.readdir(CWD+'/tmp/', function(err, list) {
                // console.log(list)
                assert(list.indexOf(newFile) > -1)

                // process.nextTick( function() {
                //     fs.unlink(newFilePath, function(err, data) {
                //         if (err) throw err;
                //     });
                // });
                done()
            });
        });
    })
  })
}) // end node env checks