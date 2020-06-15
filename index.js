let driver = {};

function updateDriverWithKeyAndValue(driverObject, key, value) {
    const newObj = {...driverObject};

    newObj[key] = value;

    return newObj;
}

function destructivelyUpdateDriverWithKeyAndValue(obj, key, value) {
    obj[key] = value;

    return obj;
};

function deleteFromDriverByKey(object, key) {
    const newObj = Object.assign({}, object)
  
    delete newObj[key]
  
    return newObj
}
  
function destructivelyDeleteFromDriverByKey(object, key) {
    delete object[key]
  
    return object
}