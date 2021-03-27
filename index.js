

// - `destructivelyDeleteFromDriverByKey()` - this function should work the same as
//   `deleteFromDriverByKey()` but it _should_ mutate the `driver` passed in. Be
//   sure and consider whether dot-notation or bracket-notation might affect your
//   solution.





const driver = {};

function updateDriverWithKeyAndValue(driver, key, value){
    return Object.assign({}, driver, { [key]: value });
};

function destructivelyUpdateDriverWithKeyAndValue(driver, key, value){
    driver[key] = value;
    return driver;
};

function deleteFromDriverByKey(driver, key){
    const newDriver = Object.assign({}, driver);
    delete newDriver[key];
    return newDriver
};

function destructivelyDeleteFromDriverByKey (driver, key){
    delete driver[key];
    return driver
};

