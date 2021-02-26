// Write your solution in this file!
let driver = {
    name: "javone"
}

updateDriverWithKeyAndValue = (obj,k,v) => {
    let newObj = {...obj}
    newObj[k] = v
    return newObj
}

function destructivelyUpdateDriverWithKeyAndValue(obj,k,v){
    obj[k] = v
    return obj    
}

function deleteFromDriverByKey(obj,key){
    let newObj = {...obj}
    delete newObj[key]
    return newObj
}

function destructivelyDeleteFromDriverByKey(obj,key){
    delete obj[key]
    return obj
}

destructivelyDeleteFromDriverByKey(driver,'name')
// deleteFromDriverByKey()
// destructivelyUpdateDriverWithKeyAndValue()
// updateDriverWithKeyAndValue()

