function somar (a, b){
    return a+b
}

const operacao = somar
//console.log(operacao(5,6))


const subtrair = function(a, b){
    return a - b
}
//console.log(subtrair(15, 10))

const calculadora = {}
calculadora.somar = somar
calculadora.subtrair = subtrair
calculadora.multiplicar = function(a, b){
    return a * b
}
console.log(calculadora.multiplicar(8,8))
