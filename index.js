// Write your solution in this file!
const driver = {};

// not mutatue the driver; return a new driver with updated value for the passed in key
function updateDriverWithKeyAndValue(driver, key, value) {
    return Object.assign({}, driver, { [key]: value});
}

function destructivelyUpdateDriverWithKeyAndValue(driver, key, value) {
    driver[key] = value;
    return driver;
}

function deleteFromDriverByKey(driver, key, value) {
    const newDriver = Object.assign({}, driver);
    delete newDriver[key];
    return newDriver;
}

function destructivelyDeleteFromDriverByKey(driver, key) {
    delete driver[key];
    return driver;
}

