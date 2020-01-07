function count_same_elements(collection) {
  //在这里写入代码
  var count_obj = {};
  for (var i = 0, len = collection.length; i < len; i++) {
    if (collection[i].length === 1) {
      if (count_obj[collection[i]]) {
        count_obj[collection[i]]++;
      } else {
        count_obj[collection[i]] = 1;
      }
    } else {
      count_obj[collection[i].charAt(0)] = parseInt(collection[i].substring(2))
    }
  }  
  var result = [];
  for (var i in count_obj) {
    var collection_count = {};
    collection_count.key = i;
    collection_count.count = count_obj[i];
    result.push(collection_count)
  }
  return result;
}

module.exports = count_same_elements;
