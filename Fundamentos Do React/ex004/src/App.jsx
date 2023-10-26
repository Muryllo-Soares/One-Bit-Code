import { useState } from 'react'
import './App.css'
import Inputs from './components/Inputs'

function App() {
  const [password, setPassword] = useState("")
  const [ copyText, setCopyText] = useState("Copiar")
  const [passwordSize, setPassWordSize] = useState(12)

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
        <label htmlFor="passwordSize">Tamanho: </label>
        <Inputs passwordSize={passwordSize} setPassWordSize={setPassWordSize}/>
      </div>
      <div className="card">
        <button onClick={generate}>Gerar senha de {passwordSize} caracteres</button>
        <button onClick={copyToClipboard}>{copyText}</button>
        <p>Sua senha segura: {password}</p>
      </div>
    </>
  )
}

export default App
