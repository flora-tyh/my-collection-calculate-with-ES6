'use strict';

function get_letter_interval_2(number_a, number_b) {
  var letterCollection = [];
  if (number_a < number_b) {
    for (let i = number_a; i <= number_b; i++) {
      letterCollection.push(NumToLetter(i));
    }
  } else {
    for (let i = number_a; i >= number_b; i--) {
      letterCollection.push(NumToLetter(i));
    }
  }
  return letterCollection;
}

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

module.exports = get_letter_interval_2;

