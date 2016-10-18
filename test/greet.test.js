var greet = require('../lib/greet');
var assert = require('assert');
var asciify = require('asciify');

describe('greeter', function() {
  var asciified = {};

  it('greet with name', function() {
    var greeting = greet('test');
    assert.equal(greeting, 'hello test, here is your name, red and asciified!');
  });

  it('greet if no name', function() {
    var greeting = greet();
    assert.equal(greeting, 'hello my new friend, here is your name, red and asciified!');
  });

  it('greet in ascii', function() {
    var greeting = greet('asciiTest');
    asciify('asciiTest',{color:'red'},function(err,res){
      console.log(res);
      asciified.ascii = res;
    });
    assert.equal(greeting, asciified.ascii);
  });
});
