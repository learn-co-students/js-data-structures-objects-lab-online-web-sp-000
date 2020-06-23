 const driver = {}


function updateDriverWithKeyAndValue (drivers, key, value) {
    return Object.assign({}, drivers, {[key]: value});

}

function destructivelyUpdateDriverWithKeyAndValue(driver, key, value) {
    driver[key] = value
    return driver;
}

function deleteFromDriverByKey(driver, key){
    // delete driver['key']
    // return driver



  const newDriver =  Object.assign({}, driver);
  delete newDriver[key];
  return newDriver;
}

 function destructivelyDeleteFromDriverByKey(driver, key){
    Object.assign({}, driver);
    delete driver[key];
    return driver;
 }
       
       