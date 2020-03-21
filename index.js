const driver = {};

function updateDriverWithKeyAndValue(driver, key, value) {
  return Object.assign({}, driver, { [key]: value});
}

function destructivelyUpdateDriverWithKeyAndValue(driver, key, value) {
  driver[key] = value;
  return driver;
}

function deleteFromDriverByKey(driver, key) {

  const newDriver = Object.assign({}, driver)
  // console.log(driver);
  // console.log(newDriver);

  delete newDriver[key];
  // console.log(newDriver);
  return newDriver;
}

function destructivelyDeleteFromDriverByKey(driver, key) {
  // console.log(driver)
  delete driver[key];
  // console.log(driver);
  return driver
}


