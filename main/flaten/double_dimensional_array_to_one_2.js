'use strict';
var choose_no_repeat_number = require("../../main/filter/choose_no_repeat_number.js");
function double_to_one(collection) {
  return choose_no_repeat_number(collection.flat(1))
}

module.exports = double_to_one;
