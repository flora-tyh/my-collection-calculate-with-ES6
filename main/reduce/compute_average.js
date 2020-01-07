'use strict';

function compute_average(collection) {
  var sum = function(num1, num2) {
    return num1 + num2;
  }
  var totalSum = collection.reduce(sum);
  var average = totalSum / collection.length;
  return average;
}

module.exports = compute_average;

