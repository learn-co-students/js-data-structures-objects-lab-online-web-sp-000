// Write your solution in this file!
const driver = {}

const updateDriverWithKeyAndValue = (driver, key, value) => {
  const newDriver = Object.assign({}, driver);
  newDriver[key] = value;
  return newDriver;
}

const destructivelyUpdateDriverWithKeyAndValue = (driver, key, value) => {
  driver[key] = value;
  return driver;
}

const deleteFromDriverByKey = (driver, key) => {
  const newDriver = Object.assign({}, driver);
  delete newDriver[key];
  return newDriver;
}

const  destructivelyDeleteFromDriverByKey = (driver, key) => {
  delete driver[key];
  return driver;
}