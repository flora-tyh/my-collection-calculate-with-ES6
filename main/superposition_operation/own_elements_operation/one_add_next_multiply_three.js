'use strict';
function one_add_next_multiply_three(collection){
  var result = [];
  for (var i = 0, len = collection.length; i < len - 1; i++) {
    result[i] = (collection[i] + collection[i + 1]) * 3
  } 
  return result
}
module.exports = one_add_next_multiply_three;
