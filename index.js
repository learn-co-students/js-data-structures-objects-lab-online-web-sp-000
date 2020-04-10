// Write your solution in this file!
let driver = {}
function updateDriverWithKeyAndValue(methodDriver, key, value) {
  let newDriver = Object.assign({}, methodDriver)
  newDriver[key] = value
  return newDriver;
}

function destructivelyUpdateDriverWithKeyAndValue(methodDriver, key, value){
  methodDriver[key] = value;
  return methodDriver
}

function deleteFromDriverByKey(methodDriver, key){
  let newDriver = Object.assign({}, methodDriver)
  delete newDriver[key]
  return newDriver;
}

function destructivelyDeleteFromDriverByKey(methodDriver, key){
  delete methodDriver[key];
  return methodDriver
}
