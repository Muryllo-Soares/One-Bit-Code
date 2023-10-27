import { useState } from 'react'
import './App.css'
import Inputs from './components/Inputs'

function App() {
  const [password, setPassword] = useState("")
  const [ copyText, setCopyText] = useState("Copiar")
  const [customSize, setCustomSize] = useState(12)
  const [showInput, setShowInput] = useState(false)

  const passwordSize = showInput ? customSize : 8

  function generate (){
    const characters = "'1234567890-=!@#$%¨&*()_+qwertyuiop[asdfghjklç~]zxcvbnm,.;/QWERTYUIOP{ASDFGHJKLÇ^}ZXCVBNM<>:?"
    let newPassword = ""
    for (let i = 0; i < passwordSize; i++) {
        const position = Math.floor(Math.random() * characters.length)
        newPassword +=  characters[position]
    }
    setPassword(newPassword)
    setCopyText("Copiar")
  }

  function copyToClipboard () {
    window.navigator.clipboard.writeText(password)
    setCopyText("Copiado!")
  }
 

  return (
    <>
      <h1>Gerador de senhas</h1>
      <div>
        <label htmlFor="showInput">Customizar Tamanho:</label>
        <input 
        type="checkbox" 
        id='showInput'
        value={showInput}
        onChange={()=> setShowInput(show => !show)}
        />
      </div>
      {
        showInput &&(
          <div>
          <label htmlFor="customSize">Tamanho: </label>
          <Inputs passwordSize={customSize} setPasswordSize={setCustomSize}/>
        </div>
        )
      }
     
      <div className="card">
        <button onClick={generate}>Gerar senha de {passwordSize} caracteres</button>
        <button onClick={copyToClipboard}>{copyText}</button>
        <p>Sua senha segura: {password}</p>
      </div>
    </>
  )
}

export default App
