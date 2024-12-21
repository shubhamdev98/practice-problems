// write a function that return the reverse of a string

// first solution

const stringValue = "hello";

function reverseString(getValue) {
  try {
    if (typeof getValue !== "string") {
      throw new Error("Please enter value must be string");
    }else{
        console.log(getValue.length)
        let inString = ''
        for(let i = getValue.length - 1; i >= 0; i--){
           inString += getValue[i]
        }
        return inString
    }
  } catch (err) {
    console.log(err.message);
  }
}

const result = reverseString(stringValue);
console.log("Reverse string is: ", result)

// second solution 

const finalResult = stringValue.split('').reverse().join('')
console.log(finalResult)