let menu = ""

do {
menu = prompt ("Menu Interativo\n" + "Ecolha uma das seguintes opções:\n" +
"1 - Opção 1\n" +
"2 - Opção 2\n" +
"3 - Opção 3\n" +
"4 - Opção 4\n" +
"5 - Encerrar")

switch(menu){
    case "1": {
        alert ("Você escolheu a Opção 1")
        break
    }
    case "2": {
        alert ("Você escolheu a Opção 2")
        break
    }
    case "3": {
        alert ("Você escolheu a Opção 3")
        break
    }
    case "4": {
        alert ("Você escolheu a Opção 4")
        break
    }
    case "5": {
        alert ("Menu Encerrado")
        alert ("Finalizando...")
        break
    }
    default:{
        alert ("Opção não encontrada")
    }
}

} while (menu !== "5")
