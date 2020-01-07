'use strict';

function get_integer_interval_2(number_a, number_b) {
  var result = [];
  if (number_a <= number_b) {
    if (number_a % 2) {
      number_a = number_a + 1;
    }
    for (var i = number_a; i <= number_b; i += 2) {
        result.push(i);
    }
  }
  else {
    if (number_a % 2) {
      number_a = number_a + 1;
    }
    for (var i = number_a; i >= number_b; i -= 2) {
        result.push(i);
    }
  }
  return result;
}

module.exports = get_integer_interval_2;
