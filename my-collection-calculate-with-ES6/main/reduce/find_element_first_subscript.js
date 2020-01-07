'use strict';

function calculate_elements_sum(collection, element) {
  for (var i = 0, len = collection.length; i < len; i ++) {
    if (element === collection[i]) {
      return i;
    }
  }
}

module.exports = calculate_elements_sum;

