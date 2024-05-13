import './App.css'
import { useState } from 'react'

function App() {
  let [counter, setCounter] = useState(0);
  function addValue(){
    setCounter(counter+1);
    setCounter(counter+1);
    setCounter(counter+1);
  }
  return (
    <>
      <h1>Let's Connect</h1>
      <br/>
      <h2>Counter Value : {counter}</h2>
      <br/>
      <button onClick={addValue}>Add Value</button>
    </>
  )
}

export default App
