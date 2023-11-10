import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";

function App() {
  const [password, setPassword] = useState("");
  const [containUppercase, setContainUppercase] = useState(false);
  const [containDigit, setContaindigit] = useState(false);
  const [containSymbol, setContainSymbol] = useState(false);
  const [length, setLength] = useState(8);

  function handleDigit(){
    setContaindigit(!containDigit);
  }
  function handleUppercase(){
    setContainUppercase(!containUppercase);
  }
  function handleSymbols(){
    setContainSymbol(!containSymbol);
  }
  function handleLength(event){
    setLength(event.target.value);
    // console.log(length);
  }
  function generatePassword(){
    const uppercaseChars = 'ABCDEFGHIJKLMNOPQRSTUVW';
    const lowercaseChars = 'abcdefghijklmnopqrstuvwxyz';
    const numberChars = '0123456789';
    const symbolChars = '!@#$%^&*()_+[{\;:,.<>?"';
    let dict = lowercaseChars;

    if(containDigit){
      dict+=numberChars;
    }
    if(containSymbol){
      dict+=symbolChars;
    }
    if(containUppercase){
      dict+=uppercaseChars;
    }

    let newPass = "";
    for(let i=0;i<length;i++){
      const randomInd = Math.floor(Math.random()*dict.length);
      newPass+=dict.charAt(randomInd);
    }
    setPassword(newPass);
  }

  return (
    <div class="flex flex-col gap-5 border- border-gray-300 border-2 rounded-lg shadow-lg items-center justify-center h-screen">
      <h1 class="text-3xl font-bold underline">Password Generator</h1>
      <div class="flex gap-2">
        <label htmlFor="length">What Should Be The Password Length</label>
        <input onChange={(e)=>{
          handleLength(e);
        }}
          type="number"
          id="length"
          checked={length}
          class="border border-gray-300 focus:outline-none focus:border-blue-500 px-4 py-1 rounded-md shadow-sm"
        />
      </div>

      <div class="flex gap-2">
        <label htmlFor="number">Include Numbers</label>
        <input type="checkBox" id="number" checked={containDigit} onChange={handleDigit} />
      </div>
      <div class="flex gap-2">
        <label htmlFor="letter">Include Uppercase letters</label>
        <input type="checkBox" id="uppercase" checked={containUppercase} onChange={handleUppercase} />
      </div>
      <div class="flex gap-2">
        <label htmlFor="symbol">Include Symbols</label>
        <input type="checkBox" id="symbols" checked={containSymbol} onChange={handleSymbols}/>
      </div>

      <h1 class="text-3xl font-bold text-blue-700 border-b-2 border-blue-500 mb-4 p-2 shadow-md">{password}</h1>
      <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={generatePassword}>Click to generate Password</button>
    </div>
  );
}

export default App;
