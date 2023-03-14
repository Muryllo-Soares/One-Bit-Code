const n = parseFloat (prompt("Digite um Número: "));
let res = ""

for(let i= 1 ; i <= 20 ; i++){
    res += + n + " X " + i + " = " + n*i +"\n"
}
alert("Resultado da tabuada do N° " + n + "\n" + res)



