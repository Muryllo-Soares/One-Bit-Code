const valor = parseFloat(prompt ("Digite um valor em Metros"));
const Conversao = prompt ("Para qual unidade de medida você quer converter?\n\n-milímetro (mm) \n\n-centímetro (cm) \n\n-decímetro (dm) \n\n-hectômetro (hm) \n\n-quilômetro (km)")

switch(Conversao){
    case "mm": 
    alert (valor + " Metro " + " convertido para milímetro é: " + valor*1000 + " mm ")
    break

    case "cm":
    alert (valor + " Metro " + " convertido para centímetro é: " + valor*100 + " cm ")
    break

    case "dm":
    alert (valor + " Metro " + "Convertido para decímetro é: " + valor*10 + " dm ")
    break

    case "hm":
    alert (valor + " Metro " + " Convertido para hectõmetro é: " + valor/100 + " hm ")
    break

    case "km":
    alert (valor + " Metro " + " Convertido para quilômetro é: " + valor/1000 + " km ") 
    break
    
    default:
        alert ("Unidade de medida não encontrada!")
}