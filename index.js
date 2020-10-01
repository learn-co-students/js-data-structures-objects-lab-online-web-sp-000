// Write your solution in this file!
const driver = {}
function updateDriverWithKeyAndValue (driver, key, value) {
    return {...driver, ...{ [key]: value } }
}
function destructivelyUpdateDriverWithKeyAndValue() {
    driver[key] = value;
    return driver;
}
function deleteFromDriverByKey() {
    const newObject = {...driver}
    delete newObject[key];
    return newObject;
}
function destructivelyDeleteFromDriverByKey(driver, key) {
    delete[key];
    return driver
}