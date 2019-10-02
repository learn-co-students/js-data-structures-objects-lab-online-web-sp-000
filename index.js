// Write your solution in this file!
const driver = {};

const updateDriverWithKeyAndValue = (driver, key, value) => {
    const newObj = {};
    newObj[key] = value; 
    const newDriver = Object.assign({}, driver, newObj);
    return newDriver; 
}

const destructivelyUpdateDriverWithKeyAndValue = (driver, key, value) => {
    const newObj = {};
    newObj[key] = value; 
    const newDriver = Object.assign(driver, newObj);
    return driver; 
}

const deleteFromDriverByKey = (driver, key) => {
    const newDriver = Object.assign({}, driver);
    delete newDriver[key];
    return newDriver; 
}

const destructivelyDeleteFromDriverByKey = (driver, key) => {
    delete driver[key];
    return driver; 
}