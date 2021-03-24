// Write your solution in this file!
const driver = {};

function updateDriverWithKeyAndValue(driver, key, value) {
    return Object.assign({},driver, { [key]: value });
}

function destructivelyUpdateDriverWithKeyAndValue(driver, key, potato) {
    driver[key] = potato;

    return driver;
}

function deleteFromDriverByKey(driver, key) {
    const newObjy = Object.assign({}, driver);
    delete newObjy[key];
    return newObjy;
}

function destructivelyDeleteFromDriverByKey(driver, key) {
    delete driver[key];
    return driver;
}
