const pacientes = ["\n1° Muryllo", "\n2° Amanda", "\n3° Antonella", "\n4° Carmem", "\n5° Maria"]
let menu = ""

do {
    menu = prompt ("Lista de pacientes para ser atendido: " + pacientes + "\n\n Novo Paciente" + "\n Consultar Paciente" + "\n sair")

    switch(menu){
        case "Novo Paciente": {
            let adicionar = prompt ("Informe o nome do novo paciente")
            pacientes.push ("\n" + adicionar)
            break
        }
        case "Consultar Paciente":{
            alert ("Paciente " + pacientes[0]+ " atendido.")
            pacientes.shift ([0])
            break
        }
        case "sair":{
            alert ("Saindo...")
            break
        }
        default:{
            alert ("Opção Não encontrada")
            break
        }
    }
} while (menu !== "sair")


