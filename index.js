const driver = {}
function updateDriverWithKeyAndValue(obj, key, val){
  return Object.assign({}, obj, {[key]: val})
}
function destructivelyUpdateDriverWithKeyAndValue(driver, key, value){
  driver[key] = value
  return driver
}
function deleteFromDriverByKey(driver, key){
  let newDriver = Object.assign({}, driver)
  delete newDriver[key]
  return newDriver
}
function  destructivelyDeleteFromDriverByKey(driver, key){
  delete driver[key]
  return driver
}
