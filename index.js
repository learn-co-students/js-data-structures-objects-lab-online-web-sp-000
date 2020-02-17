// Write your solution in this file!
const driver = {};

function updateDriverWithKeyAndValue(driver, key, value){
    //returns a driver with original key value pairs and the new key value pair
    //it does not modify the original driver,
    //but rather returns a clone with the new data
    return Object.assign({}, driver, {[key]: value});
}

function destructivelyUpdateDriverWithKeyAndValue(driver, key, value){
    //destructively updates driver with the given key and value
    //and returns the entire updated driver
    driver[key] = value;

    return driver;
}

function deleteFromDriverByKey(driver, key){
    //deletes key from a clone of driver and returns the new driver(nondestructive)
    //does not modify the original driver(non-destructive)
    const newObj = Object.assign({}, driver);
    delete newObj[key];
    return newObj;
}

function destructivelyDeleteFromDriverByKey(driver, key){
    //modifies the original driver
    //returns driver without the delete key/value pair
    delete driver[key];
    return driver;
}