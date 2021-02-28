// Write your solution in this file!
const driver = {};

function updateDriverWithKeyAndValue(driver, key, value){
    const newObj = { ...driver };
    newObj[key] = value;
    return newObj;

}

function destructivelyUpdateDriverWithKeyAndValue(driver, key, value){
    driver[key] = value;
    return driver;

}

function deleteFromDriverByKey(driver, key){
    const newobj = Object.assign({}, driver);
    delete newobj[key];
    return newobj;

}

function destructivelyDeleteFromDriverByKey(driver, key){
    delete driver[key];
    return driver;

}