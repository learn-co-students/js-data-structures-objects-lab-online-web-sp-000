const driver = {}

function updateDriverWithKeyAndValue(obj, key, value) {
    const newDriver = { ...obj};

    newDriver[key] = value;

    return newDriver
}


function destructivelyUpdateDriverWithKeyAndValue(obj, key, value)  {
    obj[key] = value

    return obj
}

function deleteFromDriverByKey(obj, key) {
    const newObj = {obj}

    delete newObj.key;

    return newObj

}

function destructivelyDeleteFromDriverByKey(object, key){
    delete object[key]
    return object
  }