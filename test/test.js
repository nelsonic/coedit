var chai   = require('chai');
var assert = chai.assert; 
var V = require('../lib')

describe('Valens Core', function(){
  describe('Module V', function(){
    it('Should be an Object', function(){
      assert.isTrue(typeof V === "object");
    })

    xit('V.read should display the record', function(){
      // assert.equal(typeof V, 'string');
    })
  })
}) // end node env checks
