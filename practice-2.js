// Find factorial value from given number

const value = 4

function factorial(getValue){
    let store = 1
    for(let i = getValue; i > 1; i--){
       store = store * i
    }
    return store    
}

const result = factorial(value)
console.log(result)

// second method

function fact(getval){
    if (getval === 0 || getval === 1) {  // Base case
        return 1;
    }
    return getval * fact( getval - 1)
}

const resultis = fact(value)

console.log(resultis)