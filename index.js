// Write your solution in this file!

const driver = {
  key:'drivers'
};
function updateDriverWithKeyAndValue(driver,key,value){
  const newDriver = { ...driver};
  newDriver[key] = value;
  return newDriver;
}
function destructivelyUpdateDriverWithKeyAndValue(obj,key,value){
  obj[key] = value;

  return obj;

}

function deleteFromDriverByKey(driver,key){
  const newDriver = { ...driver};
  delete newDriver[key]
  return newDriver
}

function destructivelyDeleteFromDriverByKey(driver,key){
  delete driver[key];
  return driver;
}
