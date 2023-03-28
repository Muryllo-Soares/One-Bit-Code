function calcular(a, b, operacao){
    console.log("Realizando  uma operação.")
    const resultado = operacao(a, b)
    return resultado
}

function somar(x, y){
    console.log("Realizando soma.")
    return x + y
}
calcular(6, 4, somar)
console.log(somar)
console.log(somar(1, 1))

calcular(9, 2, function(x, y){
    console.log("Realizando subtração")
    return x - y
})

//function exibirElemento(elemento, indice, array){
    //console.log({
        //elemento, indice, array
//})
//}
const lista = ["maça", "Banana", "Laranja", "Limão", "Uva"]
//lista.forEach(exibirElemento)

lista.forEach(function (elemento, indice, array) {
    console.log({
      elemento,
      indice,
      array
    })
  })