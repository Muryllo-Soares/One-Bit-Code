const pessoaVelha = {
    nome: prompt("Informe o nome da pessoa mais velha: "),
    idade: prompt("Informe a idade da pessoa mais velha: ")
}

const pessoaNova = {
    nome: prompt("Informe o nome da pessoa mais nova: "),
    idade: prompt("Informe a idade da pessoa mais nova: ")
}
const diferenca = pessoaVelha.idade - pessoaNova.idade

alert(
    "Nome da pessoa mais velha: " + pessoaVelha.nome + "\n" +
    "idade: " + pessoaVelha.idade + "\n" + " Anos" + 
    "Nome da pessoa mais nova: " + pessoaNova.nome + "\n" + 
    "idade: " + pessoaNova.idade + " Anos" + "\n\n" + 
    "Diferença de idade é de: " + diferenca + " Anos"
) 





