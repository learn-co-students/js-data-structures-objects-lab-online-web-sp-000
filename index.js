// Write your solution in this file!
let driver = {};

function updateDriverWithKeyAndValue(object, key, value) {
    let productObject = Object.assign({}, object, {[key]: value});
    return productObject;
};

  
function destructivelyUpdateDriverWithKeyAndValue(object, key, value) {
    let productObject = Object.assign(object, {[key]: value});
    return productObject;
};

function deleteFromDriverByKey(object, key) {
    let productObject = Object.assign({}, object); //effectively a copy
    delete productObject[key];
    return productObject;
};
function destructivelyDeleteFromDriverByKey(object, key) {
    delete driver[key]
    return driver
};