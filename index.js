// Write your solution in this file!
let driver = {name: "James", address: "123 Broadway"}

function updateDriverWithKeyAndValue(driver, key, value) {
  let updatedDriver = { ...driver};
  updatedDriver[key] = value;
  return updatedDriver;
}

function destructivelyUpdateDriverWithKeyAndValue(driver, key, value) {
  driver[key] = value;
  return driver;
}

function deleteFromDriverByKey(driver, key) {
  let deletedDriver = Object.assign({}, driver);
  delete deletedDriver[key];
  return deletedDriver;
}

function destructivelyDeleteFromDriverByKey(driver, key) {
  delete driver[key];
  return driver;
}
