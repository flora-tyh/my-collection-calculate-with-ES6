'use strict';

function get_union(collection_a, collection_b) {
  collection_b.forEach (element_b => {
    if (!(collection_a.indexOf(element_b) + 1)) {
      collection_a.push(element_b);
    }
  }) 
  return collection_a;
}

module.exports = get_union;

