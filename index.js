// Write your solution in this file!
let driver = { name: "Eli" };

function updateDriverWithKeyAndValue(driver, key, value) {
  const newObject = { ...driver };
  newObject[key] = value;
  return newObject;
}

function destructivelyUpdateDriverWithKeyAndValue(driver, key, value) {
  driver[key] = value;
  return driver;
}

function deleteFromDriverByKey(driver, key) {
  const newDriver = { ...driver };
  delete newDriver[key];
  return newDriver;
}

function destructivelyDeleteFromDriverByKey(driver, key) {
  delete driver[key];
  return driver;
}