var assert = require('assert');
var V = require('../lib/index.js')

describe('Valens Core', function(){
  describe('Module V', function(){
    it('Should be an Object', function(){
      assert(typeof V === "object");
      // assert(typeof V.readFile === 'function');
    })

    it('V.readFile should display the record', function(){
      assert(typeof V.readFile === 'function');
      // console.log(V.readFile("my text"))
      assert(V.readFile('hello') === 'hello');
    })
  })
}) // end node env checks
