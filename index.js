// Write your solution in this file!
const driver = {};

function updateDriverWithKeyAndValue(driver, key, value) {
  console.log(driver);
  let newDriver = Object.assign({}, driver);

  newDriver[key] = value;
  console.log(newDriver);
  return newDriver;
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
  driver;
  delete driver[key];
  return driver;
}
