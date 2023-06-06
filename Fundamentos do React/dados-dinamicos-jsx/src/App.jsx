function sum (a, b){
  return a + b
}

export default function App(){
  const tech = 'JavaScript'
  const status = true
  return(
    <div>
      <h1>{tech} is awesome!</h1>
      <h2>a soma entre 1 + 1 é igual {sum(1, 1)}</h2>
      <h2>Status: {status? 'On':'Off'}</h2>

    </div>
  )
}
