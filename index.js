// Write your solution in this file!
let driver = {};

function updateDriverWithKeyAndValue(obj, key, value){
  const newObject = { ...obj };
  newObject[key] = value;
  return newObject;
}

function destructivelyUpdateDriverWithKeyAndValue(obj, key, value){
  obj[key] = value;
  return obj;
}

function deleteFromDriverByKey(obj, key){
  const newObject = { ...obj };
  delete newObject[key];
  return newObject;
}

function destructivelyDeleteFromDriverByKey(obj, key){
  delete obj[key];
  return obj;
}

