// defines driver object
const driver = {};

function updateDriverWithKeyAndValue(driver, key, value) {

    // returns a driver with the original key value pairs
    // and the new key value pair

    return Object.assign({}, driver, { [key]: value });

    // or with ES6 you can use spread...
    return { ...driver, ...{ [key]: value } };

    // NOTE:
    // it does not modify the original driver,
    // but rather returns a clone with the new data

}


function destructivelyUpdateDriverWithKeyAndValue(driver, key, value) {

    driver[key] = value;

    return driver;

}


function deleteFromDriverByKey(driver, key) {

    const newObj = Object.assign({}, driver);
    // or you can use ES6 Spread operators:
    // const newObj = { ...driver }

    delete newObj[key];

    return newObj;
}


function destructivelyDeleteFromDriverByKey(driver, key) {

    delete driver[key];

    return driver;
}
