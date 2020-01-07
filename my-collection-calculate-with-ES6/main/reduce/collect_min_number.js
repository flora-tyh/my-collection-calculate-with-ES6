'use strict';
var rank_desc = require('../../main/map/rank_desc.js');
function collect_min_number(collection) {
  return rank_desc(collection)[0];
}

module.exports = collect_min_number;

