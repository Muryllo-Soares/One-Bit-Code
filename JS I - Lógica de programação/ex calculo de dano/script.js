
// dados do personagem atacante
const nomeAtacante = prompt ("Qual o nome do personagem atacante?");
const poder = prompt ("Qual o poder de ataque do " + nomeAtacante + " ?");

// dados personagem defensor
const nomeDefensor = prompt ("Qual nome do personagem defensor?")
let pontosDeVida = prompt ("Quantidade de pontos de vida do " + nomeDefensor + " ?")
const poderDeDefesa = prompt ("Qual é o seu poder de defesa?")
const escudo = prompt ("O " + nomeDefensor + " possui escudo? (Sim/Não)")

let danoCausado = 0

if (poder > poderDeDefesa && escudo === "Não"){
    danoCausado = poder - poderDeDefesa
} else if (poder > poderDeDefesa && escudo === "Sim"){
    danoCausado = (poder - poderDeDefesa) / 2
} 

pontosDeVida -= danoCausado


alert ( nomeAtacante + " causou " + danoCausado + " Pontos de dano em " + nomeDefensor)
alert(
    nomeAtacante + "\n Poder de ataque: " + poder + "\n\n" +
    nomeDefensor + "\n pontos de Vida: " + pontosDeVida + 
    "\nPoder de defesa: " + poderDeDefesa + "\n Possui escudo: " + escudo
)


