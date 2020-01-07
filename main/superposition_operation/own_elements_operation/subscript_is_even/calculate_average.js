'use strict';
var calculate_average = function(collection){
  var sum_even = 0;
  var count = 0;
  for (var i = 1, len = collection.length; i < len; i+=2) {
    sum_even += collection[i]; 
    count++;
  }
  return sum_even / count;
};
module.exports = calculate_average;
