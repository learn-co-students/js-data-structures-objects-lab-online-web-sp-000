// Write your solution in this file!
// reminder for "..." - it is the spread operator. Think of this spread thing as extracting all the individual properties one by one and transferring them to the new object.
const driver = {};

function updateDriverWithKeyAndValue(driver, key, value){
    const newDriver = { ...driver };
    newDriver[key] = value;
    return newDriver;
}

function destructivelyUpdateDriverWithKeyAndValue(driver, key, value){
    driver[key] = value;
    return driver;
}

function deleteFromDriverByKey(driver, key){
    const newDriver = { ...driver };
    delete newDriver[key];
    return newDriver;
} 

function destructivelyDeleteFromDriverByKey(driver, key){
    delete driver[key];
    return driver;
}