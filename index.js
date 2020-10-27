// Write your solution in this file!
const driver= {}

function updateDriverWithKeyAndValue(obj, key, value) {
   let newDriver = Object.assign({}, obj, { [key]: value });
    return newDriver
  }
   
  function destructivelyUpdateDriverWithKeyAndValue(obj, key, value) {
    obj[key]= value;
    return obj
  }

  function deleteFromDriverByKey(object, key) {
    const newDriver = Object.assign({}, object)
    delete newDriver[key];
    return newDriver;
}

function destructivelyDeleteFromDriverByKey(object, key) {
    delete object[key];
    return object;
}