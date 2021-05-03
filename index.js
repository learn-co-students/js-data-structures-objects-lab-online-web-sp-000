// Write your solution in this file!

const driver = {}

function updateDriverWithKeyAndValue(obj, key, value) {
 const newObj = { ...obj }
  newObj[key] = value
  return newObj
}

function destructivelyUpdateDriverWithKeyAndValue(driver, key, value) {
  driver[key] = value;
  return driver;
}

function deleteFromDriverByKey(driver, key) {
  const obj = { ...driver }
  delete obj[key];

  return obj;
}

function destructivelyDeleteFromDriverByKey(driver, key) {
  delete driver[key];

  return driver
}

