'use strict';

function find_last_even(collection) {
  for (var i = collection.length; i > 0; i--) {
    if (!(collection[i] % 2)) {
      return collection[4];
    }
  }
}

module.exports = find_last_even;
