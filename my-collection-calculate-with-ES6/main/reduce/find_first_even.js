'use strict';

function find_first_even(collection) {
  for (var i = 0, len = collection.length; i < len; i ++) {
    if (!(collection[i] % 2)) {
      return collection[i];
    }
  }
}

module.exports = find_first_even;

