'use strict';
var even_asc_odd_desc = function(collection){
  var collection_even = [] ;
  var collection_odd = [];
  var ascending_sort = function (a, b) {
    return a - b;
  }
  var descending_sort = function(a, b) {
    return b - a;
  }
  for (var i = 0, len = collection.length; i < len; i++) {
    if (collection[i] % 2) {
      collection_odd.push(collection[i]) 
    } else {
      collection_even.push(collection[i]) 
    }
  }
  collection_even.sort(ascending_sort);
  collection_odd.sort(descending_sort);
  return collection_even.concat(collection_odd);
};
module.exports = even_asc_odd_desc;
