'use strict';

function choose_multiples_of_three(collection) {
  return collection.filter(element => !(element % 3))
}

module.exports = choose_multiples_of_three;
