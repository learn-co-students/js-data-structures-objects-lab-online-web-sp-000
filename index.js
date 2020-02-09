const driver = { }

function updateDriverWithKeyAndValue(driver, key, value) {
    const update = Object.assign({}, driver, {[key]: value});
    return update;
}

function destructivelyUpdateDriverWithKeyAndValue(driver, key, value) {
    const destructive = Object.assign(driver, {[key]: value});
    return destructive;
}

function deleteFromDriverByKey(driver, key) {
    const deletedKey = Object.assign({}, driver, [key]);
    delete deletedKey[key];
    return deletedKey;
}

function destructivelyDeleteFromDriverByKey(driver, key) {
    delete driver[key];
    return driver;
}