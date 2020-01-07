function create_updated_collection(collection_a, object_b) {
  //在这里写入代码
  var count_obj = {};
  for (var i = 0, len = collection_a.length; i < len; i++) {
    if (collection_a[i].length === 1 && count_obj[collection_a[i]]) {
      count_obj[collection_a[i]]++;
    } else if (collection_a[i].length !== 1 && count_obj[collection_a[i].charAt(0)]) {_a
      count_obj[collection_a[i].charAt(0)] += parseInt(collection_a[i].match(/\d+/g));
    } else if (collection_a[i].length === 1 && !count_obj[collection_a[i]]) {
      count_obj[collection_a[i]] = 1;
    } else {
      count_obj[collection_a[i].charAt(0)] = parseInt(collection_a[i].match(/\d+/g));
    } 
  }  
  var result = []
  for (var i in count_obj) {
    var collection_a_count = {};
    collection_a_count.key = i;
    collection_a_count.count = count_obj[i];
    result.push(collection_a_count)
  }
  for (var i = 0, len = result.length; i < len; i++) {
    for (var j = 0, length = object_b.value.length; j < length; j++) {
      if (result[i].key === object_b.value[j]) {
        result[i].count -= Math.floor(result[i].count/3);
      }
    }
  }
  return result
}


module.exports = create_updated_collection;
