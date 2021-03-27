// Write your solution in this file!

let driver = {}

function updateDriverWithKeyAndValue(driver, key, value){
    let rDriver = {...driver}
    rDriver[`${key}`] = value
    return rDriver
}

function destructivelyUpdateDriverWithKeyAndValue(driver, key, value){
    driver[`${key}`] = value
    return driver
}

function deleteFromDriverByKey(driver, key){
    let rDriver = {...driver}
    delete rDriver[`${key}`]
    return rDriver
}

function destructivelyDeleteFromDriverByKey(driver, key){
    delete driver[`${key}`]
    return driver
}