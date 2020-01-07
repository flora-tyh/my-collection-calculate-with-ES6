function collect_same_elements(collection_a, collection_b) {
  //在这里写入代码
  collection_b = collection_b[0];
  var collection = collection_b.concat(collection_a);
  var count = {};
  var result = [];
  for (var i = 0, len = collection_b.length; i < len; i++) {
    if (!count[collection_b[i]]) {
      count[collection[i]] = 1;
    }
  }
  for (var i = 0, len = collection_a.length; i < len; i++) {
    if (count[collection_a[i]]) {
      result.push(collection_a[i])
    }
  }
  return result;
}

module.exports = collect_same_elements;
