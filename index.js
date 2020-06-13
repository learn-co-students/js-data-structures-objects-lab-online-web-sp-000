let driver = {};

function updateDriverWithKeyAndValue(driver, key, value) {
    const newObject = {...driver}; // Use the spread operator to copy all of the original object's properties into the new one.

    newObject[key] = value; // Create a new key/value pair with the arguments provided

    return newObject; // Return our newly created object, leaving our original object 'driver' unmodified
}

function destructivelyUpdateDriverWithKeyAndValue(driver, key, value) {
    driver[key] = value; // We take our original driver and update the key/value pair with the arguments provided

    return driver; // We return our object with the destructive updates
}

function deleteFromDriverByKey(driver, key) {
    const newObj = Object.assign({}, driver)

    delete newObj[key];

    return newObj;
}

function destructivelyDeleteFromDriverByKey(driver, key) {
    delete driver[key];

    return driver;
}
