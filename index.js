// Write your solution in this file!
const driver = {}

function updateDriverWithKeyAndValue(object, key, value) {
    return Object.assign({}, object, { [key]: value });
}

function destructivelyUpdateDriverWithKeyAndValue(object, key, value) {
    object[key] = value;
    return object;
}

function deleteFromDriverByKey(object, key) {
    let newArray = Object.assign({}, object)
    delete newArray[key]
    return newArray
}

function destructivelyDeleteFromDriverByKey(object, key) {    
    delete object[key];
    return object;
}