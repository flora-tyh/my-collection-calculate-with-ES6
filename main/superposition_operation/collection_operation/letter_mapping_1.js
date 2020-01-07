'use strict';

function even_to_letter(collection) {

  //在这里写入代码
  var even_collection = [];
  for (var i = 0, len = collection.length; i < len; i++) {
    if (!(collection[i] % 2)) {
      even_collection.push(collection[i])
    }
  }
  var numToLetter = function(number) {
    if (number > 26) {
      var remainder = number % 26;
      var quotient = number / 26;
      return (numToLetter(quotient) + String.fromCharCode(remainder + 64).toLowerCase());
    } 
    else {
      return (String.fromCharCode(number + 64).toLowerCase());
    }
  }
  var result = [];
  for (var i = 0, len = even_collection.length; i < len; i++) {
    result.push(numToLetter(even_collection[i]));
  }
  return result;
}

module.exports = even_to_letter;
