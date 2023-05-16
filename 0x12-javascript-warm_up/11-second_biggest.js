#!/usr/bin/node
const argsList = process.argv.slice(2).map(num => parseInt(num));
const srtdList = argsList.sort((a, b) => a < b);
if (srtdList.length <= 1) {
  console.log(0);
} else {
  console.log(srtdList[1]);
}
