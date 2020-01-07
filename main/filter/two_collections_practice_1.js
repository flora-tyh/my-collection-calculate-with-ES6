'use strict';
var get_intersection = require('../../main/collectionOperator/get_intersection.js');
function choose_common_elements(collection_a, collection_b) {
  return get_intersection(collection_b, collection_a)
}

module.exports = choose_common_elements;
