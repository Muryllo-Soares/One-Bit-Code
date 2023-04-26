const tows = ['Prontera', 'Izlude', 'Payon', 'Alberta', 'Geffen', 'Morroc']
const newTows = tows.filter(town => town[0] === 'P')
console.log(newTows)

const arrowSum = (a, b) =>{
    return a + b
}
console.log(`Soma arrow function ${arrowSum(8,4)}`)


const subtract = (a, b) => a-b
console.log(`Subtração: ${subtract(4, 2)}`)


const doble = n => `O dobro de ${n} é ${n*2}`
const number = 21
console.log(`Dobro: ${doble(number)}`)


const names = name => `O seu nome é ${name}`
const list = ['Muryllo', 'Paulo', 'Pedro']
console.log(names(list[2]))

const hello = () => 'Hello World!'

console.log(hello())