// print table

const tableOf = 4
const tableTill = 10

function printTable(getTableOf, getTableTill){
    let resultStorage = ''
   for(let i = 1; i <= getTableTill; i++){
      resultStorage +=`${getTableOf} * ${i} = ${getTableOf * i} \n`
   }

   return resultStorage
}

const result = printTable(tableOf, tableTill)
console.log(result)