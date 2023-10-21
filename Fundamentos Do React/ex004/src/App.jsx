import { useState } from 'react'
import './App.css'

function App() {
  
  const [copiar, setCopiar] = useState("Copiar")
  const [gerar, setGerar] = useState()

 function handleClick(){
  setGerar("_YBw#RF&WHUM")
  setCopiar("Copiar")
 }

  return (
    <>
      <h1>Gerador de senhas</h1>
      <div className="card">
        <button onClick={() => handleClick()}>
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
