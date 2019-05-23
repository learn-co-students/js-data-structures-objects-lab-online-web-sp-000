const driver = {};

function updateDriverWithKeyAndValue(object, key, value) {
  return Object.assign({}, object, { [key]: value} );
}

function destructivelyUpdateDriverWithKeyAndValue(object, key, value) {
  return Object.assign(object, { [key]: value} );
}

function deleteFromDriverByKey(obj, key) {
  const newObject = Object.assign({}, obj);
  delete newObject[key];
  return newObject
}

function destructivelyDeleteFromDriverByKey(object, key) {
  delete object[key]
  return object
}
