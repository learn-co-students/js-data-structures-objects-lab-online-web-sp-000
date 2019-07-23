// Write your solution in this file!
const driver = {}

function destructivelyUpdateDriverWithKeyAndValue(driver, key, value) {
  driver[key] = value;
  return driver;
};

function destructivelyDeleteFromDriverByKey(driver, key) {
  delete driver[key];
  return driver;
};

function updateDriverWithKeyAndValue(driver, key, value) {
    const changes = {}
    changes[key] = value
    return Object.assign({}, driver, changes);
}

function deleteFromDriverByKey(driver, key) {
  const changes = Object.assign({}, driver);
  delete changes[key];
  return changes;
}
