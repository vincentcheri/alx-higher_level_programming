#!/usr/bin/node
// JS Script

exports.callMeMoby = function (x, theFunction) {
  for (let j = 0; j < x; j++) {
    theFunction();
  }
};
