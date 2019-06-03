// Write your solution in this file!
const driver = {};

function updateDriverWithKeyAndValue(driver, key, value) {
  driver.name = 'Sam';

  const newDriver = { ...driver };
  newDriver[key] = value;

  return newDriver
}

function destructivelyUpdateDriverWithKeyAndValue(driver, key, value) {
  driver[key] = value;

  return driver
}

function deleteFromDriverByKey(driver, key) {
  const newDriverTwo = {...driver };
  delete newDriverTwo[key];

  return newDriverTwo
}

function destructivelyDeleteFromDriverByKey(driver, key) {
  delete driver[key];

  return driver
}
