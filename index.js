const driver = {}

function updateDriverWithKeyAndValue(driver, key, value) {
  const newObj = Object.assign({}, driver);
  newObj[key] = value;
  return newObj
}

function destructivelyUpdateDriverWithKeyAndValue(driver, key, value) {
  driver[key] = value;
  return driver
}

function deleteFromDriverByKey(driver, key) {
  const newDriver = Object.assign({}, driver);
  delete newDriver[key];
  return newDriver
}

function destructivelyDeleteFromDriverByKey(driver, key) {
  delete driver[key];
  return driver
}