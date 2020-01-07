'use strict';
var number_map_to_word = function(collection){
  function NumToLetter(num) {
    if (num <= 26) {
      return String.fromCharCode(96 + num);
    }
    else {
      num = num - 1;
      var rem = num % 26;
      var letter = String.fromCharCode(97 + rem);
      return NumToLetter(parseInt(num / 26)) + letter;
    }
  }
  return collection.map(element => NumToLetter(element))
};

module.exports = number_map_to_word;
