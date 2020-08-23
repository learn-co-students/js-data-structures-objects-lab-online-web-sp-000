// Write your solution in this file!

const driver = { 
  name: "Ryan",
  address: "2000 arnold street"
};

function updateDriverWithKeyAndValue(obj, key, value) {
  const newObj = { ...obj };
 
  newObj[key] = value;
 
  return newObj;
}

function destructivelyUpdateDriverWithKeyAndValue(obj, key, value) {
  obj[key] = value;
  
  return obj;
}

function deleteFromDriverByKey(obj, key, value) {
  const newObj = {...obj };
  
  newObj[key] = value;
  
  delete newObj[key]
  
  return newObj;
}

function destructivelyDeleteFromDriverByKey(obj, key, value) {
  delete obj[key];
  
  return obj;
}
