import styles from './App.module.css'

export default function App(){
  return(
    <div className={styles.container}>
      <div>
        <img src="../public/card.jpg" alt="imagem do card"  className={styles.card}/>
      </div>

      <div>
        <h1 className={styles.title}>Pôster: Star Wars (1977)</h1>
        <p>Um pôster decorativo épico do filme Star Wars, com moldura de MDF e tamanho A3. Uma ótima recordação de um dos mais icônicos filmes de todos os  tempos. Este clássico pôster trará aventura, nostalgia e a magia de Star Wars para qualquer lugar que você decidir pendurar. Não perca a chance de adicionar essa linha memória ao seu acervo!</p>
        <button className={styles.button}>Comprar agora</button>
      </div>
  </div>
  )

}
