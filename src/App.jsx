import { useState } from 'react'
import './App.css'



export default App



//SOLO DE PRACTICAA - IGNORAR
// function App() {
//   const [count, setCount] = useState(0)
//   const handleDecrement = () => {
//     setCount(count - 1)
//   }
//   const handleIncrement = () => {
//     setCount(count + 1)
//   }
//   const stateCount = count
//   if (stateCount < 0) {
//     return (
//       <>
//         <h3 id='errorCount'>¡PERDISTE! el contador no puede ser negativo</h3>
//         <button onClick={handleIncrement}>toca comenzar de nuevo</button>
//       </>
//     )
//   }

//   return (
//     <>
//     <h1>contador de prueba n1</h1>
//     <h3>el contador está en {count}</h3> 
//     <button onClick={handleDecrement}>toca para decrementar</button>
//     <button onClick={handleIncrement}> toca para incrementar</button>
//     </>
//   )
// }