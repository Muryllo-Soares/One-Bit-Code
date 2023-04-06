/*
const idadeMuryllo = 26;
const idadeAmanda = 26;

const idadeAntonella = 13;
const idadeMaria = 6;

function sum(number1, number2){
    console.log(number1 + number2)
}

sum(idadeMuryllo, idadeAmanda)
sum(idadeAntonella, idadeMaria) */

const cadastro = {
    name: "Muryllo",
    idade: 26,
    sexo: "Masculino"
}

function date(cadastro){
    console.log(cadastro)
}

date(cadastro.name)

cadastro.name = "João"

date(cadastro.name)

const x = function (a, b) {return a*b}
let z = x(4, 6)
console.log(z)
let y = x(12, 5)
console.log(y)

const m = (x, y) => { return x * y}
console.log(m(4, 6))

function soma(){
    let max = -Infinity
    for (let i = 0; i < arguments.length; i++){
        if(arguments[i] > max){
         max = arguments[i]
        }
    }
  return max
}
const s = soma (7, 8 ,12, 16)
console.log(s)



