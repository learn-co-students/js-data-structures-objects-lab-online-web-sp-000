// Write your solution in this file!
const driver = {};

function updateDriverWithKeyAndValue(driver, key, value){
   return Object.assign({}, driver, { [key]: value });

}

function destructivelyUpdateDriverWithKeyAndValue(driver, key, value){
       driver[key] = value;

        return driver;
}

function deleteFromDriverByKey(driver, name){

const newdriver = Object.assign({}, driver);


delete newdriver[name];
// => true

return newdriver;


}

function destructivelyDeleteFromDriverByKey(driver, name){
    delete driver.name;
    
    return driver;
}
