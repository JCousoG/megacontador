import { useState } from "react";


function App() {
  let [valorActual, SetvalorActual] = useState(0)
  function manexadorClickSuma() {
    let novoValor = valorActual + 1
    SetvalorActual(novoValor)
  }
  function manexadorClickResta() {
    let novoValor = valorActual - 1
    SetvalorActual(novoValor)
  }
  return (
   <>
    <h1>{valorActual}</h1>
    <button onClick={manexadorClickSuma}>+</button>
    <button onClick={manexadorClickResta}>-</button>

   </>
  );
}

export default App;
