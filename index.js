// Write your solution in this file!
let driver = {};

function updateDriverWithKeyAndValue(driver, key, value) {
    return Object.assign({}, driver, {[key]: value});
};

function destructivelyUpdateDriverWithKeyAndValue(driver, key, value) {
    return Object.assign(driver, {[key]: value});
};

function deleteFromDriverByKey(driver, key) {
    const driverTwo = Object.assign({}, driver, key);
    delete driverTwo[key];
    return driverTwo;
};

function destructivelyDeleteFromDriverByKey(driver, key) {
    delete driver[key];
    return driver;
};