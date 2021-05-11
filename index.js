// Write your solution in this file!
const driver= {Firooz:'1990',Basil:'1995', John:'1975'}

function updateDriverWithKeyAndValue(driver, key, value) {

	 return Object.assign({},driver,{[key]:value});
};

function destructivelyUpdateDriverWithKeyAndValue(driver, key, value){

	driver[key]=value;
	return driver;
};

function deleteFromDriverByKey(driver, key){

	const newDriver= Object.assign({},driver)
	delete newDriver[key];
	return newDriver;
};

function  destructivelyDeleteFromDriverByKey(driver, key){

	  delete driver[key];
	  return driver;

}