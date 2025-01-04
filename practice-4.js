// write a function thats finds and points the maximum element in an array of SVGAnimatedNumberList.

const arrayIs = [1,10,6,12,8,9,30,5]
            //   
function maxOutput(getArray){
    let biggestNumber = getArray[0]
    for(let i = 1; i < getArray.length; i++){
        if(getArray[i] > biggestNumber){
             biggestNumber = getArray[i]
        }
        
    }
    return biggestNumber
}
const result = maxOutput(arrayIs)
console.log(result)