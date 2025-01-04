const baseValue = 2;
const ExponentValue = 6;

function exponentCalculator(base, exponent) {

  let storage = 1;

  for (let i = 1; i <= exponent; i++) {
    storage = storage * base;
  }

  return storage
}

const result = exponentCalculator(baseValue, ExponentValue);

console.log(result);
