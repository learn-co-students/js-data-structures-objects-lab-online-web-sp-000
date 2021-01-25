let obj = {}
let driver = obj


function updateDriverWithKeyAndValue(obj, key, val) {
  let objs = {...obj};
  objs[key] = val;
  return objs;
}

function destructivelyUpdateDriverWithKeyAndValue(obj, key, val) {
  obj[key] = val;
  return obj;
}

function deleteFromDriverByKey(obj, key) {
  let newobj = Object.assign({}, obj);
  delete newobj[key];
  return newobj;
}

function destructivelyDeleteFromDriverByKey(obj, key) {
  delete obj[key];
  return obj;
}
