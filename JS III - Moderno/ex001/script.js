//Média Aritmética Simples:
const mediaAritSimples = (...media) =>{
    const sum = media.reduce((accm, value) => accm + value, 0)
    return sum / media.length
}
console.log(mediaAritSimples(2, 6, 3, 7, 4))

//Média Aritmética Ponderada:
const mediaPonderada =(...ponderada) =>{
const sum = (ponderada[0].n * ponderada[0].p) + (ponderada[1].n * ponderada[1].p) + (ponderada[2].n * ponderada[2].p)
return sum /(ponderada[0].p + ponderada[1].p + ponderada[2].p)

}
console.log(mediaPonderada({n: 7, p: 2}, {n:9, p:5}, {n:3, p:1})) 