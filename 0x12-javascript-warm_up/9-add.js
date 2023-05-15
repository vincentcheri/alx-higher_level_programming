#!/usr/bin/node
const sum = (function add (i, j) {
  return parseInt(i) + parseInt(j);
})(process.argv[2], process.argv[3]);
console.log(sum);
