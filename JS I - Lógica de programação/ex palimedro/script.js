const palavra = prompt ("Digite uma palavra:")
let palavraInvertida = ""

for(let i = palavra.length - 1;  i >= 0 ; i--){
    palavraInvertida += palavra[i]
}
if (palavra === palavraInvertida) {
    alert (palavra + " é um palimedro!")
} else {
    alert(palavra +  " Não é um palimedro\n\n" +
    palavra + " !== " + palavraInvertida)
}
