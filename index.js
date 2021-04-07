// Write your solution in this file!
let driver = {};

function updateDriverWithKeyAndValue(object, key, value){
    const newObject = { ...object };
 
  newObject[key] = value;
 
  return newObject;
}

function destructivelyUpdateDriverWithKeyAndValue(object, key, value){
    object[key] = value;
    return object;
}

function deleteFromDriverByKey(object, key){
    const newObject = Object.assign({}, object);
    delete newObject[key];
    return newObject;
}

function destructivelyDeleteFromDriverByKey(object, key){
    delete object[key];
    return object;
}