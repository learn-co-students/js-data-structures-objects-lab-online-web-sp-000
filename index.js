// Write your solution in this file!
const driver = {}

const updateDriverWithKeyAndValue = (obj, ...args) => destructivelyUpdateDriverWithKeyAndValue({...obj}, ...args);
const destructivelyUpdateDriverWithKeyAndValue = (obj, k, v) => (obj[k] = v) && obj;
const destructivelyDeleteFromDriverByKey = (obj, k) => (delete obj[k]) && obj;
const deleteFromDriverByKey = (obj, k) => destructivelyDeleteFromDriverByKey({...obj}, k);
