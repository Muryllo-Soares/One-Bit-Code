let saldo =  parseFloat (prompt ("Qual a quantidade de dinheiro disponível?"));
let menu = "";
let adicionar = 0;
let remover = 0;


do {
    menu = prompt ("Saldo disponível : " + "R$"+ saldo + "\n" +
    "Opções:\n" +
    "1 - Adicionar.\n" + 
    "2 - Tirar.\n" +
    "3 - Sair.")

    switch(menu){
        case "1":{
        adicionar = parseFloat (prompt("Qual valor que gostaria de adicionar?"))
        saldo += adicionar 
        break
        }
        case "2":{
        remover = parseFloat( prompt("Qual valor que gostaria de retirar?"))
        saldo -= remover
        break
        }
        case "3":{
        alert("Operação Finalizada!")
        alert("Finalizando...1")
        break
        }
        default:{
            alert("Opção não encontrada")
        }
    }

} while(menu !== "3")
