// Write your solution in this file!
let driver = {}
//1
function updateDriverWithKeyAndValue(obj, key, value) {
  return Object.assign({}, obj, { [key]: value });
}

//2
function destructivelyUpdateDriverWithKeyAndValue(obj, key, value) {
obj[key] = value;
return obj
}
//3
function deleteFromDriverByKey(obj, key) {
  const newdriver = Object.assign({}, obj);
  delete newdriver[key];
  return newdriver;
}

//4
function destructivelyDeleteFromDriverByKey(driver, key) {
  delete driver[key];
  return driver;
}
