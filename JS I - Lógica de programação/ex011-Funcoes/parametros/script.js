function dobro(x){
    console.log("O dobro de " + x + " é " + (x*2))
}

dobro(8)

function dizerOla(nome = "Mundo"){
    console.log("Olá " + nome + "!")
}
dizerOla("Muryllo")
dizerOla()

function soma(a, b){
    a+b
}
soma(7, 5)


function parametroDoJeitoCerto(usuario){
console.log(usuario)
}
const dadosDoUsuario = {
    nome:"Muryllo",
    telefone: "xxxx-xxxx",
    email: "muryllo@email.com",
    senha: 1234
}
parametroDoJeitoCerto(dadosDoUsuario)
