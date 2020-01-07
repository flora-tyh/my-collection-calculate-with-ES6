'use strict';

function calculate_elements_sum(collection) {
  var sum = function(num1, num2) {
    return num1 + num2;
  }
  var totalSum = collection.reduce(sum);
  return totalSum;
}

module.exports = calculate_elements_sum;

