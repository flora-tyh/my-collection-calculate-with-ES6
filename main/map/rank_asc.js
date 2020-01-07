'use strict';
var rank_asc = function(collection){
  function asc(a, b) {
    return b - a
  }
  return collection.sort(asc);
};

module.exports = rank_asc;
