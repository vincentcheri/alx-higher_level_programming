#!/usr/bin/node
let x = process.argv[2];
x = parseInt(x);
if (isNaN(x)) {
  console.log('Missing number of occurences');
} else {
  for (let j = 0; j < x; j++) {
    console.log('C is fun');
  }
}
