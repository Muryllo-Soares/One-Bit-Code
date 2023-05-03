//Média Aritmética Simples:
const mediaAritSimples = (...media) =>{
    const sum = media.reduce((accm, value) => accm + value, 0)
    return sum / media.length
}
console.log(mediaAritSimples(2, 6, 3, 7, 4))

//Média Aritmética Ponderada:
const mediaPonderada =(...ponderada) =>{
const sum = ponderada.reduce((accum, {number, weight}) => accum + (number * (weight ?? 1)), 0)
const weightSum = ponderada.reduce((accum, entry) => accum + (entry.weight ?? 1), 0)
return sum / weightSum
}
console.log(mediaPonderada({number:9, weight: 3},{number:7},{number:10, weight: 1}))

//Médiana:
const median = (...numbers) =>{
    const orderdNumbers = [...numbers].sort((a, b) => a - b)
    const middle = Math.floor(orderdNumbers.length / 2)
    if(orderdNumbers.length % 2 !== 0){
        return orderdNumbers[middle]
    }
    const firtMedian = orderdNumbers[middle - 1]
    const secondMedian = orderdNumbers[middle]
    return mediaAritSimples(firtMedian, secondMedian)
}
console.log(median(2, 5, 99, 4, 42, 7))
console.log(median(15, 14, 8, 7, 3))


//Moda: 
const mode = (...numbers) => {
    const quantities  = numbers.map(num => [num, numbers.filter(n => num === n).length])
    quantities.sort((a, b) => b[1] - a[1])
    return quantities[0][0]
}
console.log(mode(1, 1, 5, 4, 9, 7, 4, 3, 5, 2, 4, 0, 4))
