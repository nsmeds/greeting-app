var greet = require('../lib/greet');
var assert = require('assert');
var emoji = require('node-emoji').emoji;

describe('greeter', function() {

  it('greet with name', function() {
    var greeting = greet('test');
    assert.equal(greeting, 'hello test ' + emoji.v);
  });

  it('greet if no name', function() {
    var greeting = greet();
    assert.equal(greeting, 'hello my new friend ' + emoji.v);
  });
});
