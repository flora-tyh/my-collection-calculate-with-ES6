'use strict';

function compute_chain_median(collection) {
  var arr = collection.split("->");
  var rank_desc = function(collection){
    if (collection.length <= 1) { 
      return collection; 
    }
    var pivotIndex = Math.floor(collection.length / 2);
    var pivot = +collection[pivotIndex];
    var left = [];
    var right = [];
    for (var i = 0; i < collection.length; i++) {
      if (i != pivotIndex) {
        if (collection[i] < pivot) {
          left.push(+collection[i]);
        } else {
          right.push(+collection[i]);
        }
      }
    }
    return rank_desc(left).concat([pivot], rank_desc(right));
  };
  arr = rank_desc(arr);
  var len = arr.length;
  if (len % 2) {
    return (arr[Math.ceil(len / 2)]);
  }
  else {
    return (arr[len / 2 - 1] + arr[len / 2]) / 2;
  }
}

module.exports = compute_chain_median;
