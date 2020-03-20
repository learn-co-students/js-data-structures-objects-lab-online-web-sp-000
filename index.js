// Write your solution in this file!

var driver = {}

function updateDriverWithKeyAndValue(driver, key, value) {
    return Object.assign({}, driver, {
        [key]: value
    });
}

function destructivelyUpdateDriverWithKeyAndValue(driver, key, value) {
    driver[key] = value;
    return driver;

}

function deleteFromDriverByKey(driver, key) {
    const driverClone = Object.assign({}, driver);
    delete driverClone[key];
    return driverClone;

}

function destructivelyDeleteFromDriverByKey(driver, key) {
    delete driver[key];
    return driver;
}