// Write your solution in this file!
 let driver = {}

function updateDriverWithKeyAndValue(obj,key,value){
   const newObj = Object.assign({},obj,{[key]:value})
   return newObj
}

function destructivelyUpdateDriverWithKeyAndValue(obj,key,value){
   return Object.assign(obj, {[key]:value})
}

function deleteFromDriverByKey(obj,key){
   const newObj = Object.assign({},obj)
   delete newObj[key]
   return newObj

}

function destructivelyDeleteFromDriverByKey(obj,key){
   delete obj[key]
   return obj
}
