'use strict';
var single_element = function(collection){
  var result = [];
  var no_repeat_obj = {};
  for (var i = 1, len = collection.length; i < len; i += 2) {
    if (!no_repeat_obj[collection[i]]) {
      result.push(collection[i]);
      no_repeat_obj[collection[i]] = 1;
    } else {
      result.splice(result.indexOf(collection[i]), 1)
    }
  }
  return result;
};
module.exports = single_element;
