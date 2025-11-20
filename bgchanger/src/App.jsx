import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
   const [color, setColor] = useState("olive");


  return (
    <div className="w-full h-screen" 
    style={{backgroundColor:color}}> 
      <div className=" fixed flex flex-wrap justify-center left-1/2 transform -translate-x-1/2 gap-3 bottom-9">
        <button className="m-2 p-4 bg-pink-500 rounded-xl text-white font-bold" 
        onClick={() => setColor("pink")}>Pink</button>
        <button className="m-2 p-4 bg-green-500 rounded-xl text-white font-bold" 
        onClick={() => setColor("green")}>Green</button>
        <button className="m-2 p-4 bg-blue-500 rounded-xl text-white font-bold" 
        onClick={() => setColor("blue")}>Blue</button>
        <button className="m-2 p-4 bg-yellow-500 rounded-xl text-white font-bold" 
        onClick={() => setColor("yellow")}>Yellow</button>
        <button className="m-2 p-4 bg-purple-500 rounded-xl text-white font-bold" 
        onClick={() => setColor("purple")}>Purple</button>
      </div>
    </div>
  )
}

export default App
