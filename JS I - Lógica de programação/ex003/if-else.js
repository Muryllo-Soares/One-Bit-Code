
const idade = prompt ("QUAL SUA IDADE?")


/*
if (idade >= 18) {
    alert (`Você tem ${idade} maior de idade`);
} else {
    alert (`Você tem ${idade} menor de idade`);
}

*/

/*
if (idade >= 18 && idade <= 69){
    alert (`Você tem ${idade} anos, Maior de idade`); 
    alert (`Você tem ${idade} anos, Já pode tirar CNH`);
}  
else if ( idade < 18){
    alert (`Você tem ${idade} anos, Menor de idade`);
    alert (`Você tem ${idade} anos, Não pode dirigir`);
} 
else if (idade >= 70) {
    alert (`Você tem ${idade} anos, não pode mais dirigir`)
}
*/

const resultado = idade >= 18 ? "Maior de idade" : "Menor de idade" 

alert (resultado);

