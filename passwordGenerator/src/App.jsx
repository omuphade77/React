import { use, useCallback, useEffect, useState } from "react";

import "./App.css";

function App() {
  const [password, setPassword] = useState("");
  const [length, setLength] = useState(12);
  const [number, setNumber] = useState(true);
  const [charSpecial, setCharSpecial] = useState(true);

 
    // Password generation logic will go here

    const passwardgenerate = useCallback(() => {
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
      if (number) str += "0123456789";
      if (charSpecial) str += "!@#$%^&*()_+~`|}{[]:;?><,./-=";
      let pass = "";
      for (let i = 1; i <= length; i++) {
        let char = Math.floor(Math.random() * str.length + 1);
        pass += str.charAt(char);
      }
      setPassword(pass);
    }, [length, number, charSpecial, setPassword]);
  


useEffect(() => {
    passwardgenerate();
  }, [passwardgenerate]);
  

  return (
    <>
      <div className="container">
        <h1>Password Generator</h1>
        <input
          type="text"
          value={password}
          readOnly
          placeholder="Your Secure Password"
        />
        <button onClick={
          () => { navigator.clipboard.writeText(password);
          alert("Passward Copied!")
          
        }}>copy</button>
        <div>
          <input
            type="range"
            min="8"
            max="20"
            value={length}
            onChange={(e) => setLength(e.target.value)}
          />
          <label>Length: {length}</label>
        </div>
        <input
          type="checkbox"
          checked={number}
          onChange={(e) => setNumber(e.target.checked)}
        />
        <label>Include Numbers</label>
        <br />
        <input
          type="checkbox"
          checked={charSpecial}
          onChange={(e) => setCharSpecial(e.target.checked)}
        />
        <label>Include Special Characters</label>
       </div>
    </>
 
  );
}
export default App;
