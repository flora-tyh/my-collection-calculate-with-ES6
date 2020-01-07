'use strict';
  var even_group_calculate_average = function(collection){
    var collection_even = [];
    for (var i = 1, len = collection.length; i < len; i+=2) {
      if (!(collection[i] % 2)) {
        collection_even.push(collection[i])
      }
    }
    var get_average = function(arr) {
      if (!arr) {
        return null;
      }
      var sum = 0;
      for (var i = 0, len = arr.length; i < len; i++) {
        sum += arr[i];
      } 
      return sum / len;
    }
    var collection_digit = [];
    for (var i = 0, len = collection_even.length; i < len; i++) {
      var num_digit = collection_even[i].toString().length;
      if (!collection_digit[num_digit - 1]) {
        collection_digit[num_digit - 1] = [];
      }
      collection_digit[num_digit - 1].push(collection_even[i]) 
    }
  
    for (var i = 0, len = collection_digit.length; i < len; i++) {
      collection_digit[i] = get_average(collection_digit[i]);
    }
    var result = [];
    for (var i = 0, len = collection_digit.length; i < len; i++) {
      if (collection_digit[i]) {
        result.push(collection_digit[i]);
      }
    }
    if (result.length === 0) {
      return [0];
    } else {
      return result;
    }
  }
module.exports = even_group_calculate_average;
