'use strict';
var rank_desc = function(collection){
  function desc(a, b) {
    return a - b;
  }
  return collection.sort(desc);
};

module.exports = rank_desc;
