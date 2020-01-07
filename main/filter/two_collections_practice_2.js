'use strict';

function choose_no_common_elements(collection_a, collection_b) {
  collection_a.forEach((element_a, index_a) => {
    collection_b.forEach((element_b, index_b) => {
      if (element_a === element_b) {
        collection_a.fill(0, index_a, index_a + 1);
        collection_b.fill(0, index_b, index_b + 1);
      }
    })
  });
  return collection_a.concat(collection_b).filter(element => element !== 0);
}

module.exports = choose_no_common_elements;
