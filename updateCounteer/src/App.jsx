import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0);
  const [error, seterror] = useState("");
  let AddValue = () => {
    
    setCount(count+1);
    seterror("");
  }
  let RemoveValue = () => {
    if (count > 0) {
      setCount(count-1);
    } else {
      seterror("Error")
      console.log("error, negative not allowed")
    }
    
  }

  return (
    <>
      <h1>Welcome to add and remove value</h1>
      <button onClick={AddValue}>Add {count}</button>
      <br />
      <br />
      <button onClick={RemoveValue}>remove {count}</button>
      {error && <p >{error}</p>}
    </>
  )
}

export default App
