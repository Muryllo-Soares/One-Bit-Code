import Styles from './App.module.css'

export default function App(){
  return (
    <div className= {Styles.app}>
      <img src="homem-de-ferro.jpg" alt="Poster Homem de Ferro" />
      <div className='text'>
        <h1>Pôster: Homem De Ferro</h1>
        
        <p>Um pôster decorativo épico do Homem de Ferro, com moldura de MDF e tamanho A3. Uma ótima recomendação de um dos mais conhecidos heróis dos quadrinhos. Este clássico pôster trará aventura, nostalgia e a magia do icônico personagem da Marvel para qualquer lugar que você decidi pendurar. Não perca a chance de adicionar esse lindo pôster ao seu acervo. </p>

        <button>
          Comprar agora
        </button>
      </div>
    </div>
  )
}