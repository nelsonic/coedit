var assert  = require('assert'); 
var fs      = require('fs');
var lastRun = 

describe('Node.js Environment Checks', function(){
  describe('Basic IO', function(){
    it('VIEW files in current working directory (CWD)', function(){
        var dir = process.cwd();
        fs.readdir(dir, function(err, list) {
            // console.log(list);
            assert(list.length > 0);
        });
    })

    it('READ from a file', function(){
        fs.readFile('./test/testruns.txt', 'utf8', function(err, data) {
            if (err) console.log(err);
            // console.log(data);
            var runCount = String(data).split("\n");
            // console.log('\n --- '+data +' --- \n')
            assert(runCount.length > 0);
        });
    })

    it('WRITE to a file', function(done){
        // var CWD = process.cwd();
        var file = './test/testruns.txt';
        fs.readFile(file, 'utf8', function(err, data) {
            if (err) console.log(err);
            var before = String(data).split("\n");
            var time = String(new Date().getTime());
            // console.log("Time : "+time)
            fs.appendFile(file, '\n'+time, function(err) {
                if (err) console.log(err);
                fs.readFile(file, 'utf8', function(err, data) {
                    if (err) console.log(err);

                    var after = String(data).split("\n");
                    assert(after.length === before.length+1);
                    done();
                }); // end inner fs.readFile
            }); // end fs.writeFile
        }); // end fs.readFile
    })

    it('CREATE (temporary) file tests create/write access to FS', function(done){
        // setup
        var CWD = process.cwd(); //__filename.substring(0, __filename.lastIndexOf('/'));
        // console.log(CWD);
        var newFile = new Date().getTime() +".txt",
            newFilePath = CWD+'/test/'+newFile;
        fs.writeFile(newFilePath, "hello!", function (err) {
            if (err) console.log(err);
            // confirm the new file is in the directory
            fs.readdir(CWD+'/test/', function(err, list) {
                // console.log(list)
                assert(list.indexOf(newFile) > -1);
                process.nextTick( function() {
                    fs.unlink(newFilePath, function(err, data) {
                        if (err) throw err;
                    });
                });
                done()
            });
        });
    })
  })
}) // end node env checks