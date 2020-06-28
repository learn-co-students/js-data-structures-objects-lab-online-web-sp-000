// define a driver variable and assign it to an Object
const driver = {};

// Four functions:

// 1.
// updateDriverWithKeyAndValue()- this function should take in three arguments:  a driver Object, a key and a value.
// This function should not mutate the driver and should return a new driver that has an updated value for the key passed in.

function updateDriverWithKeyAndValue(driver, key, value) {
    //  using ES6 Spread operators:
    //  return {...driver, ...{[key]: value}}}

    // with assign: 
    // A common pattern for Object.assign() is to provide an empty Object as the first argument.
    //  That way we're composing an entirely new Object instead of modifying or overwriting the properties of an existing Object.
    
    // function nondestructivelyUpdateObject(obj, key, value) {
    //     return Object.assign({}, obj, { [key]: value });
    // }
    return Object.assign({}, driver, {[key]: value});
}

// 2.
// destructivelyUpdateDriverWithKeyAndValue() - this function should work the same as updateDriverWithKeyAndValue() 
// but it should mutate the driver parameter passed in.
// Destructive: This means that we're making changes directly to the original Object

// function destructivelyUpdateObject (obj, key, value) {
//     obj[key] = value;
//     return obj;
// }

function destructivelyUpdateDriverWithKeyAndValue(driver, key, value) {
    driver[key] = value;
    return driver
}

// 3.
// deleteFromDriverByKey() - this function should take in a driver Object and a key. 
// It should delete the key/value pair for the key that was passed in from the driver Object.
//  This should all not actually mutate the driver passed in.

// Object is passed as an argument to Object.keys(), the return value is an Array containing
//  all of the keys at the top level of the Object:
//  key must be in bracket [key],  dot-notation don't work

function deleteFromDriverByKey(driver, key) {
    // Alternate using ES6 Spread operators:
    // const newObj = { ...driver }
    const newObj = Object.assign({}, driver);
    
    delete newObj[key];

    return newObj;
}

//  4.
// destructivelyDeleteFromDriverByKey() - this function should work the same as deleteFromDriverByKey()
//  but it should mutate the driver passed in
// key must be in bracket [key],  dot-notation don't work

function destructivelyDeleteFromDriverByKey(driver, key) {
    delete driver[key];

    return driver;
}