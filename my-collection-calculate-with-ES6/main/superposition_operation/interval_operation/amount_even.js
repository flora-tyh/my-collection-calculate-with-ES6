'use strict';

function amount_even(collection) {

  //在这里写入代码
  var result = 0;
  for (var i = 0, len = collection.length; i < len; i++) {
    if (! (collection[i] % 2)) {
      result += collection[i];
    }
  }
  return result;
}

module.exports = amount_even;
