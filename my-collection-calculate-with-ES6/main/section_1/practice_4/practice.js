function collect_same_elements(collection_a, object_b) {
  //在这里写入代码
  var collection_a_arr = [];
  for (var i = 0, len = collection_a.length; i < len; i++) {
    collection_a_arr.push(collection_a[i].key);
  }
  var collection_b_arr = object_b.value;
  var collection = collection_b_arr.concat(collection_a_arr);
  var count = {};
  var result = [];
  for (var i = 0, len = collection_b_arr.length; i < len; i++) {
    if (!count[collection_b_arr[i]]) {
      count[collection[i]] = 1;
    }
  }
  for (var i = 0, len = collection_a_arr.length; i < len; i++) {
    if (count[collection_a_arr[i]]) {
      result.push(collection_a_arr[i])
    }
  }
  return result;
}

module.exports = collect_same_elements;
