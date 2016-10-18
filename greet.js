const asciify = require('asciify');

function greet(name) {
  name = name || 'my new friend';
  asciify(name, function(err,res){console.log(res)});
  return 'hello ' + name + ', here is your name, asciified!';
}

console.log(greet(process.argv[2]));

module.exports = greet;