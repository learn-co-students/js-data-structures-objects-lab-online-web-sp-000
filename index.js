// Write your solution in this file!

let driver={}
driver.name="Sam"

function updateDriverWithKeyAndValue(driver, key, value){
    const newObj = { ...driver};
    newObj[key] = value;
    return newObj;
  }

  function destructivelyUpdateDriverWithKeyAndValue(driver, key, value){
    driver[key] = value;
    return driver;
  }
  
  function deleteFromDriverByKey(driver, key) {
    var newObj = Object.assign({}, driver);
    delete newObj[key];
    return newObj}

    function destructivelyDeleteFromDriverByKey(object, key) {
      delete object[key];
      return object;
    }