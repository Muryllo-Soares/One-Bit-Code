function calcTriangulo() {
    const base = prompt("Informe a base do triângulo:");
    const altura = prompt("Informe a altura do triângulo:");
    return base * altura / 2;
}

function calcRetangulo(){
    const base = prompt("Informe a base do retângulo:");
    const altura = prompt("Informe a altura do retângulo:");
    return base*altura;
}

function calcQuadrado(){
    const lado = prompt("Informe o lado do quadrado: ");
    return lado*lado;
}

function calctrapezio (){
    const baseMaior = parseFloat(prompt("Informe a base maior do trapézio:"));
    const baseMenor = parseFloat(prompt("Informe a base menor do trapézio:"));
    const altura = prompt("Informe a altura do trapézio")
    return (baseMaior + baseMenor) * altura / 2
}

function calcCirculo(){
    const raio = prompt("Informe o raio do círculo:")
    return 3.14 * raio * raio
}

function menu (){
    return prompt (
            "Calculadora Geométrica\n\n" +
            "1. Área do triângulo\n" +
            "2. Área do retângulo\n" +
            "3. Área do quadrado\n" +
            "4. Área do trapézio\n" +
            "5. Área do círculo\n" +
            "6. Sair")
}


function executar (){
    let opcao = ""

    do{
        opcao = menu()
        let resultado

        switch (opcao){
            case "1":
                resultado = calcTriangulo()
                break
            case "2":
                resultado = calcRetangulo()
                break
            case "3":
                resultado = calcQuadrado()
                break
            case "4":
                resultado = calctrapezio()
                break
            case "5":
                resultado = calcCirculo()
                break
            case "6":
                alert("Saindo...")
                break
            default:
                alert("Opção invalida")
        }
        if (resultado){
            alert("Resultado: " + resultado)
        }
    } while(opcao !=="6")
}
executar()

