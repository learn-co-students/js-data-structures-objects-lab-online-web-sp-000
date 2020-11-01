// Write your solution in this file!
const driver = {};

function updateDriverWithKeyAndValue(driver, key, value){
    return Object.assign({}, driver, {[key]: value});
}


function destructivelyUpdateDriverWithKeyAndValue(driver, key, value){
    driver[key] = value;
    return driver;
}


function deleteFromDriverByKey(driver, key){
    const newObj = Object.assign({}, driver);

    newObj[key] = undefined;

    return newObj;
}

function destructivelyDeleteFromDriverByKey(driver, key) {
    driver[key] = undefined;
  
    return driver;
  }