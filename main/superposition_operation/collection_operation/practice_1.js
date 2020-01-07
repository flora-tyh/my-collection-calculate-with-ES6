'use strict';

function hybrid_operation(collection) {

  //在这里写入代码
  var result = 0;
  for (var i = 0, len = collection.length; i < len; i++) {
    result += (collection[i] * 3 + 2);
  }
  return result;
}

module.exports = hybrid_operation;

