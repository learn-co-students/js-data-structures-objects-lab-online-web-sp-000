// Write your solution in this file!
const driver = {}

function updateDriverWithKeyAndValue(object, key, value){
  const newObject = {...object}
  newObject[key] = value

  return newObject
}

function destructivelyUpdateDriverWithKeyAndValue(object, key, value){
  object[key] =  value
  return object
}


function deleteFromDriverByKey(object, key) {
  const newObject = {...object}
  delete newObject[key]
  return newObject
}

function destructivelyDeleteFromDriverByKey(object, key){
  delete object[key]
  return object
}
