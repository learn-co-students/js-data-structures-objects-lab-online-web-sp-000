// Write your solution in this file!
let driver = {}

function updateDriverWithKeyAndValue(driver, key, value){
  return Object.assign({}, driver, {name: "Sam", address: "11 Broadway"})
}

function destructivelyUpdateDriverWithKeyAndValue(driver, key, value){
  driver[key] = value
  return driver
}

function deleteFromDriverByKey(driver, key){
  let newDriver = {}
  delete deleteFromDriverByKey.name;
  return newDriver;
}

function destructivelyDeleteFromDriverByKey(driver, key){
  delete driver[key];
  // return destructivelyDeleteFromDriverByKey.name;
  return driver;
}