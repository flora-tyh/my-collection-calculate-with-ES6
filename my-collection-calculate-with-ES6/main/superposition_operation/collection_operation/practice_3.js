'use strict';

function hybrid_operation_to_uneven(collection) {

  //在这里写入代码
  var result = 0;
  for (var i = 0, len = collection.length; i < len; i++) {
    if (collection[i] % 2) {
      result += (collection[i] * 3 + 5);
    }
  }
  return result;
}

module.exports = hybrid_operation_to_uneven;

