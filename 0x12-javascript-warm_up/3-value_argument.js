#!/usr/bin/node
let argsLgt = 0;
process.argv.forEach((element) => { argsLgt++; });
if (argsLgt === 2) {
  console.log('No argument');
} else {
  console.log(process.argv[2]);
}
