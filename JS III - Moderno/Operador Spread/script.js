const arr1 = [1, 2, 3, 4] // original
const arr2 = arr1 // copiado
const arr3 = [...arr1] // clonado com Spread
arr2.pop() // como copiei o arr1 para o arr2 o arr1 também removeu o n° 4 pois o arr2 tem herança do arr1

arr2.push(5) // adicionado 5 em arr1 e arr2

arr3.push(5,6) //adicionado 5, 6 no arr3 que foi clonado do arr1

console.log({arr1, arr2, arr3})

const name = "Muryllo"
const newName = {...name}
console.log(newName)