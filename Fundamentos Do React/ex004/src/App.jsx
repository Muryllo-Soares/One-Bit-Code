import { useState } from 'react'
import './App.css'

function App() {
  
  const [copiar, setCopiar] = useState("Copiar")
  const [gerar, setGerar] = useState()

 

  

  return (
    <>
      <h1>Gerador de senhas</h1>
      <div className="card">
        <button onClick={() => setGerar("_YBw#RF&WHUM")}>
          Gerar! 
        </button>

        <button onClick={()=> setCopiar("Copiado!")}>
        {copiar}
        </button>

        <p>{gerar}</p>
      </div>
    </>
  )
}

export default App
