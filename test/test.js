var chai   = require('chai');
var assert = chai.assert; 
var V = require('../lib')

describe('Valens Core', function(){
  describe('Module V', function(){
    it('Module Should be an Object', function(){
      assert.equal(typeof V, 'object');
      // assert.equal(typeof C.getChange, 'function');
    })
  })
}) // end node env checks
