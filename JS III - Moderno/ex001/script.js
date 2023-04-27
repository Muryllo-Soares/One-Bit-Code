//Média Aritmética Simples:
const mediaAritSimples = (...media) =>{
    const sum = media.reduce((accm, value) => accm + value, 0)
    return sum / media.length
}

console.log(mediaAritSimples(2, 6, 3, 7, 4))