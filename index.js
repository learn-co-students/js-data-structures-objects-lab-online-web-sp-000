const driver = {}

function updateDriverWithKeyAndValue(driver,key,value) {
    return {...driver, ... {[key]: value}}
}

function destructivelyUpdateDriverWithKeyAndValue(driver,key,value) {
    driver[key] = value
    return driver
}

function deleteFromDriverByKey(driver,key) {
    let delObj = {...driver}
    delete delObj[key]
    return delObj
}

function destructivelyDeleteFromDriverByKey(driver,key) {
    delete driver[key]
    return driver
}