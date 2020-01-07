'use strict';

function choose_divisible_integer(collection_a, collection_b) {
  var result = [];
  collection_a.forEach(element_a => {
    collection_b.forEach(element_b => {
      if (!(element_a % element_b)) {
        result.push(element_a)
      }
    })
  });
  return result
}

module.exports = choose_divisible_integer;
