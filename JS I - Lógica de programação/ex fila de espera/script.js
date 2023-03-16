const pacientes = []
let menu = ""

do {

    let paciente = ""
    for (let i = 0 ; i < pacientes.length ; i++){
        paciente += (i + 1) + "° - " + pacientes[i] + "\n"
    }

    menu = prompt ("Pacientes: \n " + paciente + "\n Novo Paciente" + "\n Consultar Paciente" + "\n sair")

    switch(menu){
        case "Novo Paciente":
            let adicionar = prompt ("Informe o nome do novo paciente")
            pacientes.push (adicionar)
            break
        case "Consultar Paciente":
            const pacienteConsultado = pacientes.shift()
            if(pacienteConsultado){
                alert ("Paciente " + pacienteConsultado+ " atendido.")
            }else{
                alert("Não há pacientes na fila!")
            }
            break
        case "sair":
            alert ("Saindo...")
            break
        default:
            alert ("Opção Não encontrada")
            break 
    }
} while (menu !== "sair")


