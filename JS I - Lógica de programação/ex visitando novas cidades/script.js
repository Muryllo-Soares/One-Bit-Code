const turista = prompt("E ai turista, Qual o seu nome?");
let cidades = "";
let contagem = 0;

let continuar = prompt("Você visitou alguma cidade? (Sim/Não)");

while (continuar === "Sim") {
  let cidade = prompt("Qual cidade?");
  cidades += " - " + cidade + "\n";
  contagem++;
  continuar = prompt("Visitou mais alguma cidade (Sim/Não)");
}

alert(
  "Nome do Turista: " +
    turista +
    "\n" +
    "\n N° de cidades visitadas: " +
    contagem +
    "\n Cidades visitadas:\n " +
    cidades
);
