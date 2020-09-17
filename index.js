// Write your solution in this file!
let driver = {}

function updateDriverWithKeyAndValue(obj, key, value) {
    const newObj = { ...obj};

    newObj[key] = value;

    return newObj;
}

function destructivelyUpdateDriverWithKeyAndValue(driver, key, value) {

    return Object.assign(driver, { [key]: value } )
}

function deleteFromDriverByKey(driver, key) {
    let newObj = { ...driver}
    delete newObj[key]
    return newObj
}

function destructivelyDeleteFromDriverByKey(driver, key) {
    delete driver[key]
    return driver
}