// Write your solution in this file!
const driver = {}

const updateDriverWithKeyAndValue = (driver, key, value) => {
  const returnDriver = Object.assign({}, driver)
  returnDriver[key] = value
  return returnDriver
}

const destructivelyUpdateDriverWithKeyAndValue = (driver, key, value) => {
  driver[key] = value
  return driver
}

const deleteFromDriverByKey = (driver, key) => {
  const returnDriver = Object.assign({}, driver)
  delete returnDriver[key]
  return returnDriver
}

const destructivelyDeleteFromDriverByKey = (driver, key) => {
  delete driver[key]
  return driver
}
