'use strict';

function average_uneven(collection) {

  //在这里写入代码
  var result = 0;
  var count = 0;
  for (var i = 0, len = collection.length; i < len; i++) {
    if (collection[i] % 2) {
      result += collection[i];
      count++;
    }
  }
  return result/count;
}

module.exports = average_uneven;
