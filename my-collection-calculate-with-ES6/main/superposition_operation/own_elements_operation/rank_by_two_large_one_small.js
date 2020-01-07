'use strict';
function rank_by_two_large_one_small(collection){
  //这里写代码。。。
  var ascending_sort = function (a, b) {
    return a - b;
  }
  collection.sort(ascending_sort);
  for (var i = 0, len = collection.length; i < len - 3; i += 3) {
    var min_value = collection[i];
    collection[i] = collection[i + 1];
    collection[i + 1] = collection[i + 2];
    collection[i + 2] = min_value;
  }
  return collection;
}
module.exports = rank_by_two_large_one_small;
