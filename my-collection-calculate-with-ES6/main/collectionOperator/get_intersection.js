'use strict';

function get_intersection(collection_a, collection_b) {
  var result = [];
  collection_b.forEach (element_b => {
    if (collection_a.indexOf(element_b) + 1) {
      result.push(element_b);
    }
  }) 
  return result;
}

module.exports = get_intersection;
