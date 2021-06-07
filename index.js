// Write your solution in this file!

let driver = {}

function updateDriverWithKeyAndValue(driver, key, value){
    return Object.assign({}, driver, { [key]: value });
}


function destructivelyUpdateDriverWithKeyAndValue(driver, object, value){
  driver[object] = value
  
  return driver
}

function deleteFromDriverByKey(driver, key){
  let new_object = Object.assign({}, driver);
  delete new_object[key]
  return new_object
}

function destructivelyDeleteFromDriverByKey(driver, key){
  delete driver[key];
  return driver
}