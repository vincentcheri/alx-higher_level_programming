#!/usr/bin/node
const convert = process.argv[2];
const convertNum = parseInt(convert);
if (isNaN(convertNum)) {
  console.log('Not a number');
} else {
  console.log(`My number: ${convertNum}`);
}
