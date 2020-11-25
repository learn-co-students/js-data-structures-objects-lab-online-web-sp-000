const driver = {};

function updateDriverWithKeyAndValue(driver, key, value) {
    return { ...driver, ...{ [key]: value } };
}
// return a new driver that has an updated value for the key passed in

function destructivelyUpdateDriverWithKeyAndValue(driver, key, value) {
    driver[key] = value;
    return driver;
}
// same as above, but mutate the driver parameter passed in

function deleteFromDriverByKey(driver, key) {
    const newObj = Object.assign({}, driver);
    delete newObj[key];
    return newObj;
}
// delete the key/value pair for the key that was passed in from the driver Object

function destructivelyDeleteFromDriverByKey(driver, key) {
    delete driver[key];
    return driver;
}
// same as above, but mutate the driver parameter passed in
