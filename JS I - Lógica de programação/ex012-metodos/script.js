let pessoa = {
    nome: "Muryllo",
    idade: 26,
    dizerOla(){
        console.log("Olá Mundo!, Meu nome é " + this.nome)
    }
}
console.log(pessoa)
pessoa.dizerOla()

typeof console