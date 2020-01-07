'use strict';

function average_to_letter(collection) {

  //在这里写入代码
  var sum = function(num1, num2) {
    return num1 + num2;
  }
  var totalSum = collection.reduce(sum);
  var average = Math.ceil(totalSum / collection.length);
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
  return numToLetter(average)
}

module.exports = average_to_letter;

