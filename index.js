// Write your solution in this file!

const driver = {};

function updateDriverWithKeyAndValue(obj, key, value) {
    return Object.assign({}, driver, { [key]: value });
    }


function destructivelyUpdateDriverWithKeyAndValue(obj, key, value) {
    obj[key] = value;
    return obj;
};

function deleteFromDriverByKey(driver, key) {
    let newObj = { ...driver };
    delete newObj[key];
    return newObj;
};

function destructivelyDeleteFromDriverByKey(driver, key) {
    delete driver[key];
    return driver;
};