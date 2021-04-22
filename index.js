const driver = {};

function updateDriverWithKeyAndValue(driver, key, value) {
    const newDriver = {...driver};
    newDriver[key] = value;
    return newDriver;
};
function destructivelyUpdateDriverWithKeyAndValue(driver, key, value) {
    const newDriver = driver;
    newDriver[key] = value;
    return newDriver;
};

function deleteFromDriverByKey(driver, key) {
    const newDriver = {...driver};
    delete newDriver[key];
    return newDriver; 
};

function destructivelyDeleteFromDriverByKey(driver, key) {
    const newDriver = driver;
    delete newDriver[key];
    return newDriver;
};
