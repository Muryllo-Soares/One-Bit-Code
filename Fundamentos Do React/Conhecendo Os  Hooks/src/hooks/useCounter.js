import { useState } from "react"
//Como criar o seu proprio HOOKS
//você só pode chamar um hook em uma função que é um componente React
//sempre seguir a nomenclatura dos hooks
export default function useCounter(){
    
    const [count, setCount] = useState(0)

    const increment = () => {
        setCount(count + 1)
    }

    return {count, increment}
}