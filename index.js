// Write your solution in this file!
let driver = {}


// in this method it looks like we are requiring different things such as an key, value, object etc. but in reality
// we are only passing objects to the assign method, they are just done differently. One is a literal call to an empty object
// second is a reference to an already existing object, and the third is an object we are literally creating on the spot.
// the return value will be an originally empty object merged with other two objects.
//The purpose of the key and value inputs, its to ensure we are updating a key and value that might already exist on the second
//object we are passing.
function updateDriverWithKeyAndValue(object,key,value) {
    return Object.assign({}, object, {[key]: value });
}

function destructivelyUpdateDriverWithKeyAndValue(object,key,value) {
    return Object.assign(object, {[key]: value });
}

function deleteFromDriverByKey (object,key) {
    const newObject = Object.assign({},object);
    delete newObject[key];
    return newObject;
}

function destructivelyDeleteFromDriverByKey (object, key) { 
    delete object[key];
    return object;
}
