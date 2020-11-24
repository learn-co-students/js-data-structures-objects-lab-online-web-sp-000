// Write your solution in this file!
let driver = {};

function updateDriverWithKeyAndValue(obj, key, value) {
    return Object.assign({}, obj, {[key]: value});
}

function destructivelyUpdateDriverWithKeyAndValue(obj, key, value) {
    obj[key] = value;
    return obj;
}

function deleteFromDriverByKey(driver, key) {
    let copyObject = driver;
    console.log("QUick");
    console.log(driver);
    delete copyObject[key];
    return driver;
}

function destructivelyDeleteFromDriverByKey(driver, key) {

}
