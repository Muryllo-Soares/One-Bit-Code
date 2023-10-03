/* eslint-disable react/prop-types */
import Button from "../Button";
import styles from "./styles.module.css";

export default function Card({ poster, title }) {
  return (
    <div className={styles.container}>
      <img className={styles.card} src={poster} alt="imagem do card" />
      <div>
        <h1 className={styles.title}>{title}</h1>
        <p>
          Um pôster decorativo épico do filme Star Wars, com moldura de MDF e
          tamanho A3. Uma ótima recordação de um dos mais icônicos filmes de
          todos os tempos. Este clássico pôster trará aventura, nostalgia e a
          magia de Star Wars para qualquer lugar que você decidir pendurar. Não
          perca a chance de adicionar essa linha memória ao seu acervo!
        </p>
        <Button />
      </div>
    </div>
  );
}
