#!/usr/bin/node
// JS Script

exports.callMeMoby = function (y, theFunction) {
  for (let j = 0; j < y; j++) {
    theFunction();
  }
};
