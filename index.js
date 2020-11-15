let driver = {};

function updateDriverWithKeyAndValue(obj, key, value) {
   // This function should not mutate the driver and 
   // should return a new driver that has an updated 
   // value for the key passed in.
   return Object.assign({}, obj, {[key]: value});
}

function destructivelyUpdateDriverWithKeyAndValue(obj, key, value) {
   // this function should work the same as updateDriverWithKeyAndValue() 
   // but it should mutate the driver parameter passed in.
   return Object.assign(obj, {[key]: value});
}

function deleteFromDriverByKey(obj, key) {
   // delete the key/value pair for the key that was passed in from 
   // the driver Object. This should all not actually mutate the 
   // driver passed in.
   let newDriver = Object.assign({}, obj);
   delete newDriver[key];
   return newDriver;
}

function destructivelyDeleteFromDriverByKey(obj, key) {
   // should work the same as deleteFromDriverByKey() but it should mutate 
   // the driver passed in. Be sure and consider whether dot-notation or 
   // bracket-notation might affect your solution.
   delete obj[key];
   return obj;
}