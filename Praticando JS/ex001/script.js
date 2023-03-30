alert("Bem-Vindo! A seguir pediremos que informe alguns dados.")
const dados = {
    nome: prompt("Informe seu nome: "),
    idade: prompt("Informe sua idade: ")
}

alert ("O seu nome: " + dados.nome + "\n" +
        "Sua idade: " + dados.idade)

confirm ("Você confirma sua idade? " + dados.idade)

