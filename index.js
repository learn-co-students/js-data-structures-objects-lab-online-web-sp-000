// Write your solution in this file!

const driver = {}

function updateDriverWithKeyAndValue(driver, key, value) {
    const newDriver = {...driver};
    newDriver[key] = value;
    return newDriver;
};

function destructivelyUpdateDriverWithKeyAndValue(driver, key, value) {
    driver[key] = value
    return driver;
};

function deleteFromDriverByKey(driver, key) {
    const newDriver = {...driver};
    delete newDriver[key]; //see notes below why bracket notation being used.
    return newDriver;
};

/*
const obj = { foo: "bar" };
const newObj = Object.assign({}, obj);
newObj;
// => { foo: "bar" }
delete newObj['foo'];
// => true
newObj;
// => {}
obj;
// => { foo: "bar" }
*/

function destructivelyDeleteFromDriverByKey(driver, key) {
    delete driver[key];
    return driver;
};