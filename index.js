// Write your solution in this file!

const driver = {
  name: 'Sam',
  address: '12 Broadway'
}

function updateDriverWithKeyAndValue(driver, key, value) {
  const newObj = { ...driver };
  newObj[key] = value;
  return newObj;
}

function destructivelyUpdateDriverWithKeyAndValue(driver, key, value){
  driver[key] = value;
   return driver;
}

function deleteFromDriverByKey(driver, key) {
  const newObj = Object.assign({}, driver);
  delete newObj[key];
  return newObj;
}


function destructivelyDeleteFromDriverByKey(driver, key){
  delete driver[key];
  return driver;
}
