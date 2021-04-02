
const driver = {};

function updateDriverWithKeyAndValue(obj, key, value) {
  return Object.assign( {}, obj, {[key]: value} )
}

function destructivelyUpdateDriverWithKeyAndValue(obj, key, value) {
  return Object.assign( obj, {[key]: value} )
}

function deleteFromDriverByKey(obj, key) {
  const newdriver = {...obj};
  delete newdriver[key];
  return newdriver;
}

function destructivelyDeleteFromDriverByKey(obj, key) {
  delete obj[key];
  return obj;
}
