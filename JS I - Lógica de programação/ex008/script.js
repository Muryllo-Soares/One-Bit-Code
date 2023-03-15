let arr = ["café da manhã", "almoço", "chá da tarde", "jantar"]
console.log(arr)

//adiciona um elemento no final do array
arr.push ("ceia")
console.log (arr)

//adiciona um elemento no começo do array
arr.unshift("ceia")
console.log(arr)

//remove um elemento no final do array
arr.pop ("ceia")
console.log(arr)

//remove um elemento no começo do array
arr.shift("ceia")
console.log(arr)

//Verifica se um certo elemento está presente no array
const inclui = arr.includes("café da manhã")
console.log(inclui)

//Encontra o indice do elemento indicado, caso não exista no array, retorna o valor -1
const indice = arr.indexOf("jantar")
console.log(indice)

