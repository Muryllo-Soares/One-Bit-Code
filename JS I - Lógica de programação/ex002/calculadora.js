const valor1 = prompt ("Digite o Primeiro valor")
const valor2 = prompt ("Digite o Segundo valor")

const x = parseFloat (valor1)
const y = parseFloat(valor2)

const soma = x + y
const subtracao = x - y
const multiplicacao = x * y
const divisao = x / y

alert(
    "A soma dos valores: " + soma +
    "\n A subtração dos valores: " + subtracao +
    "\n A multiplicação dos valores: " + multiplicacao +
    "\n A divisão dos valores: " + divisao 
)