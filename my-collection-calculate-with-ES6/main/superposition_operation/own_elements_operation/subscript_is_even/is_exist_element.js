'use strict';
var is_exist_element = function(collection,element){
  for (var i = 0, len = collection.length; i < len; i += 2) {
    if (element === collection[i]) {
      return true
    }
  }
  return false
};
module.exports = is_exist_element;
