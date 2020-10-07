// Write your solution in this file!
let driver = {};

function updateDriverWithKeyAndValue(object, key, value){
  let myClone = Object.assign({}, object);
  myClone[key] = value;
  return myClone;
}

function destructivelyUpdateDriverWithKeyAndValue(object, key, value){
  object[key] = value;
  return object;
}

function deleteFromDriverByKey(object, key){
  let myClone = Object.assign({}, object);
  delete myClone[key];
  return myClone;
}

function destructivelyDeleteFromDriverByKey(object, key){
  delete object[key];
  return object;
}


let myUpdate = updateDriverWithKeyAndValue(driver, "Name", "Rohan");
deleteFromDriverByKey(myUpdate, "Name")