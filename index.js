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
    let res = Object.assign({}, object)
    delete res[key]
    return res
}

function destructivelyDeleteFromDriverByKey(object, key) {
    delete object[key];
    return object;
}
