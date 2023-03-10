
const veiculo1 = prompt ("Nome do primeiro veículo");
const vel_veiculo1 = prompt (`Velocidade do ${veiculo1}`);

const veiculo2 = prompt ("Nome do segundo veículo");
const vel_veiculo2 = prompt (`Velocidade do ${veiculo2}`);


if (vel_veiculo1 > vel_veiculo2){
    alert ("O veículo " + veiculo1 + " é mais rápido")
} else if  (vel_veiculo2 > vel_veiculo1) {
    alert ("O veículo " + veiculo2 + " é mais rápido")
} else {
    alert ("Ambos veiculos tem a mesma velocidade")
}