'use strict';

function choose_even(collection) {
  return collection.filter(element => !(element % 2))
}

module.exports = choose_even;