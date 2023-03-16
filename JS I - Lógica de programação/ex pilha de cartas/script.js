let cartas = ["\n7 de ouro", "\nrei de copas", "\ndama  de paus", "\n4 de copas", "\nvalete de espadas"];
let menu = "";

do {
    menu = prompt ("Quantidade de cartas que estão atualmente no baralho: \n" + cartas + "\n\n" +
"Adicionar uma carta\n" + "Puxar uma carta\n" + "sair");

switch(menu){
    case "Adicionar uma carta":{
        const adicionar = prompt("Qual nome da carta que deseja adicionar?");
        cartas.unshift("\n" + adicionar);
        break
    }
    case "Puxar uma carta":{
        alert ("Você puxou a carta " + cartas[0])
        cartas.shift([0])
        break
    }
    case "sair": {
        alert ("Finalizando...")
        breaksa
    }
    default:{
        alert ("Opção invalida")
    }
}
}while (menu !== "sair");