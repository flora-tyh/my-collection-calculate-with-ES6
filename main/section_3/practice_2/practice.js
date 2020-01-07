function create_updated_collection(collection_a, object_b) {
  //在这里写入代码
  for (var i = 0, len = collection_a.length; i < len; i++) {
    for (var j = 0, length = object_b.value.length; j < length; j++) {
      if (collection_a[i].key === object_b.value[j]) {
        collection_a[i].count -= Math.floor(collection_a[i].count/3);
      }
    }
  }
  return collection_a;
}

module.exports = create_updated_collection;
