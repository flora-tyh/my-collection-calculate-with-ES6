'use strict';
var rank_asc = require('../../main/map/rank_asc.js');
function collect_max_number(collection) {
  return rank_asc(collection)[0];
}

module.exports = collect_max_number;
