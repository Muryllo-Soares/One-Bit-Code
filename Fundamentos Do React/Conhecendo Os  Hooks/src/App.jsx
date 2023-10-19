import useCounter from './hooks/useCounter'
import './App.css'

//você só pode chamar um hook no top-level da função
function App() {
  const {count, increment} = useCounter()

  return (
    <>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={increment} >
          count is {count}
        </button>
      </div>
    </>
  )
}

export default App
