// Write your solution in this file!

let driver = {   

}



 function updateDriverWithKeyAndValue (driver, key, value ){
     return {...driver, [key]: value  }
 }

 // this is for update driver method  
 // const a = {x: "Hi", y: "Test"};
 // const b = {...a, y: "hello"}; 


 function destructivelyUpdateDriverWithKeyAndValue(driver, key, value){
     driver[key] = value 
     return driver 
 }

 function deleteFromDriverByKey(driver, key){
    let newObject = Object.assign({ }, driver)

    delete newObject[key]

    return newObject

 }

 function destructivelyDeleteFromDriverByKey(driver,key){
        delete driver[key]

        return driver
 }
