// Write your solution in this file!
// updateDrvierwithKeyandValue(
//   const driver = {
//     name: 'kenton',
//     updateDriver: function(){
//       return driver.name = "kunta";
//     }
//   }
// )

let driver = {}
function updateDriverWithKeyAndValue(driver, key, value){

let newdriver = Object.assign({},driver, {[key] : value } )

return newdriver

}

function destructivelyUpdateDriverWithKeyAndValue(driver, key, value){

  driver[key] = value
  return driver

}

function deleteFromDriverByKey(driver,key){

  let newdriver = Object.assign({},driver)

  delete newdriver[key]

    return newdriver
}


function destructivelyDeleteFromDriverByKey(driver, key) {

  delete driver[key]
  // delete driver[value]

  return driver
}
