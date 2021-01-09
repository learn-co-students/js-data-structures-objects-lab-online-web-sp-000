// Write your solution in this file!
const driver ={
  object: "romeo",
  key: "for",
  value: "tree"
}
function updateDriverWithKeyAndValue(object, key,value){
  return Object.assign({}, object, {[key]: value})
  
}


function destructivelyUpdateObjectWithKeyAndValue(object, key, value){
  object[key] = value;
  return object;
}

function deleteFromObjectByKey(object, key) {
  const newObj = Object.assign({}, object)
  delete newObj[key]
  return newObj
}
function destructivelyDeleteFromObjectByKey(object, key) {
  delete object[key];
  return object;
}