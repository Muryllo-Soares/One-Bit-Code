const imoveis = []
let opcao = ""

do {
    opcao = prompt (
        "Bem-Vindo(a) ao Cadastro de Imóveis!\n" + 
        "Total de Imóveis: " + imoveis.length + 
        "\n\nEscolha uma opção:\n1. Novo imóvel\n2. Lista de imóveis\n3. Sair"
    )

        switch(opcao){
            case "1":
            const imovel = {}
            imovel.proprietario = prompt("Informe o nome do proprietario do imóvel:")
            imovel.quartos = prompt ("Informe o número de quartos: ")
            imovel.banheiros = prompt("Quantos banheiros tem no imóvel?")
            imovel.garagem = prompt ("O imóvel possui garagem? (Sim/Não)")

            const confirmacao = confirm("Salvar este imóvel?\n" +
            "\n Proprietario: " + imovel.proprietario +
            "\n Número de quartos: " + imovel.quartos + 
            "\n Número de banheiros: " + imovel.banheiros + 
            "\n Possui garagem?: " + imovel.garagem)

            if(confirmacao){
                imoveis.push(imovel)
            }
            break

            case "2":
                for(let i = 0; i < imoveis.length; i++){
                    alert(
                        "Imóvel " + (i + 1) + 
                        "\n Proprietario: " + imoveis[i].proprietario +
                        "\n Quartos: " + imoveis[i].quartos + 
                        "\n Banheiros: " + imoveis[i].banheiros + 
                        "\n Possui Garagem?: " + imoveis[i].garagem 
                    )
                }
                break
                
            case "3":
            alert("Encerrando...")
            break

            default:
                alert("Opção inválida!")
        }   
        } while (opcao !== "3")


