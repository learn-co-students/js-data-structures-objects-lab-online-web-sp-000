const driver = {}

function updateDriverWithKeyAndValue(driver, key, val){
    return {...driver, [key]: val};
}

function destructivelyUpdateDriverWithKeyAndValue(driver, key, val){
    driver[key] = val;
    return driver;
}


function deleteFromDriverByKey(driver, key){
    const  driverDup = Object.assign({}, driver);
    delete driverDup[key];
    return driverDup;
}

function destructivelyDeleteFromDriverByKey(driver, key){
    delete driver[key]
    return driver
}
