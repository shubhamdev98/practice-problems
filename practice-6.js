// how many vowels in this string 

const value = "shubham"

function getVowels(getValue){
  const getVowel = []

  for (let i = 0; i < getValue.length; i++) {
    const element = getValue[i];
     if(element == 'a' || element == 'e' || element == 'i' || element == 'o' || element == 'u'){
        getVowel.push(element)
     }
  }
  return getVowel
}

const result = getVowels(value)
console.log(result)
