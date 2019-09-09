// Write your solution in this file!
let driver = {};
function updateDriverWithKeyAndValue(driver, key, value){
  let newObj = Object.assign({}, driver);
  
  newObj[key] = value;
  return newObj;
}

function destructivelyUpdateDriverWithKeyAndValue(driver, key, value){
  driver[key] = value;
  return driver;
}

function deleteFromDriverByKey(driver, key){
  let driverDeleted = Object.assign({}, driver);
  delete driverDeleted[key];
  
  return driverDeleted;
}

function destructivelyDeleteFromDriverByKey(driver, key){
  delete driver[key];
  return driver;
}