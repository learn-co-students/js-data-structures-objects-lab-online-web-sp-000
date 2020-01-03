// Write your solution in this file!

let driver = {};

function updateDriverWithKeyAndValue(driver, key, value){
    const newDriver = {...driver};
    newDriver[key] = value;
    return newDriver; 
}

function destructivelyUpdateDriverWithKeyAndValue(driver, key, value){
    driver[key] = value;

    return driver;
}

function deleteFromDriverByKey(driver, key){
    const cloneDriver = {...driver};
    delete cloneDriver[key];

    return cloneDriver;
}

function destructivelyDeleteFromDriverByKey(driver, key){
   delete driver[key];
   return driver;
}