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

// corta uma parte do array tanto do começo quanto do fim.
const refeiçõesDia= arr.slice (0, 3)
console.log(refeiçõesDia)
console.log(arr)

arr.push("ceia")
console.log(arr)
const refeiçãoNoturna = arr.slice(-2)
console.log(refeiçãoNoturna)


// junta dois ou mais arrays ou elementos e devolve o resultado sem alterar os array
const refeições =refeiçõesDia.concat(refeiçãoNoturna, "lancinho da noite")
console.log(refeições)
console.log(refeiçõesDia)
console.log(refeiçãoNoturna)
