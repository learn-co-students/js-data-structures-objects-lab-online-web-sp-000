// Write your solution in this file!
const driver = {}

function updateDriverWithKeyAndValue(array, key, value) {
  const newDriver = { ...driver };
  newDriver[key] = value;
  return newDriver
}

function destructivelyUpdateDriverWithKeyAndValue(array, key, value) {
  array[key] = value
  return array
}

function deleteFromDriverByKey(array, key) {
  const newArray = {...array};
  delete newArray[key];
  return newArray;
}

function destructivelyDeleteFromDriverByKey(object, key) {
  delete object[key];
  return object
}
