'use strict';
var rank_desc = require('../../main/map/rank_desc.js');
function compare_collections(collection_a, collection_b) {
  collection_a = rank_desc(collection_a);
  collection_b = rank_desc(collection_b);
  collection_a.forEach(element_a => {
    collection_b.forEach(element_b => {
      if (element_a !== element_b) {
        return false
      }
    })
  })
  return true
}

module.exports = compare_collections;


