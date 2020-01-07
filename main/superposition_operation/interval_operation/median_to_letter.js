'use strict';

function median_to_letter(collection) {

  //在这里写入代码
  var len = collection.length;
  var mid_number = 0;
  if (len % 2) {
    mid_number = collection[(len - 1) / 2];
  } else {
    mid_number = Math.ceil((collection[len / 2 - 1] + collection[len / 2]) / 2);
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
  return numToLetter(mid_number)
}  

module.exports = median_to_letter;
