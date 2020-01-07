'use strict';

function spilt_to_zero(number, interval) {
  var result = [];
  result.push(number);
  while (number > 0.0000001) {
    number = number - interval;
    result.push(Math.round(number * 10) / 10);
  }
  return result;
}

module.exports = spilt_to_zero;
