/* Dados dinamicos no JSX é usado dentro de  chaves {}, dentro dela eu consigo usar quase tudo de JS, menos blocos como IF ELSE, WHILE, FOR, etc... mas consigo usar Funções, variaveis, fazer calculos e operadores ternarios, como pode ver exemplos abaixo.*/

function sum(a, b) {
  return a + b;
}

export default function App() {
  const idade = 27;
  const status = true;
  return (
    <div>
      <h1>Minha idade é: {idade}</h1>
      <h1>A soma de A e B é igual a: {sum(1, 2)} </h1>
      <h1>O status agora é: {status ? "ON" : "OFF"}</h1>
    </div>
  );
}
