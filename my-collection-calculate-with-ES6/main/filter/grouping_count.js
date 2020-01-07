'use strict';

function grouping_count(collection) {
  var result= {};
  collection.forEach (element => {
    if (!result[element]) {
      result[element] = 1;
    } 
    else {
      result[element]++;
    }
  })
  return result;
}

module.exports = grouping_count;
