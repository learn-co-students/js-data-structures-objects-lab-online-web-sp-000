// Write your solution in this file!
const driver = {}

function updateDriverWithKeyAndValue(d, k, v) {
  const newDriver = {...d };

  newDriver[k] = v;

  return newDriver;
}

function destructivelyUpdateDriverWithKeyAndValue(d, k, v) {
  driver[k] = v;

  return driver;
}

function deleteFromDriverByKey(driver, key) {
  const newDriver = {...driver }

  delete newDriver[driver, key];

  return newDriver;
}

function destructivelyDeleteFromDriverByKey(driver, key) {
  delete driver[driver, key];

  return driver;
}
