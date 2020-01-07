'use strict';
var calculate_median = function(collection){
  var collection_even = [];
  for (var i = 1, len = collection.length; i < len; i+=2) {
    collection_even.push(collection[i])
  }
  var len = collection_even.length;
  var mid_number = 0;
  if (len % 2) {
    mid_number = collection_even[(len - 1) / 2];
  } else {
    mid_number = Math.ceil((collection_even[len / 2 - 1] + collection_even[len / 2]) / 2);
  }
  return mid_number;
};
module.exports = calculate_median;
