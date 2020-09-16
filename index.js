// Write your solution in this file!
const driver = {}

//returns a driver w the original key value pairs and new key value pair
//not modify original driver 
function updateDriverWithKeyAndValue(driver, key, value){
    //Object.assign() combines properties from multiple objects into  a single object 
    return Object.assign({}, driver, { [key]: value})
}


function destructivelyUpdateDriverWithKeyAndValue(driver, key, value){
    driver[key] = value;

    return driver
}

function deleteFromDriverByKey(driver, key){
    let newObj = Object.assign({}, driver)
    delete newObj[key];
    return newObj;
  }


  function destructivelyDeleteFromDriverByKey(driver, key){
    delete driver[key];
    return driver
  }
