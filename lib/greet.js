var emoji = require('node-emoji').emoji;

function greet(name) {
  name = name || 'my new friend';
  return 'hello ' + name + ' ' + emoji.v;
}

console.log(greet(process.argv[2]));

module.exports = greet;