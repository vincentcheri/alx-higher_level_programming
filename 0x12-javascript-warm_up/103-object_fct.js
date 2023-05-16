#!/usr/bin/node
let myObj = {
  type: 'object',
  value: 12
};
console.log(myObj);
myObj.incr = function () {
  myObj.value++;
};
myObj.incr();
console.log(myObj);
myObj.incr();
console.log(myObj);
myObj.incr();
console.log(myObj);
