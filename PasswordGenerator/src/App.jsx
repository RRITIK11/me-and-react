import { useCallback, useEffect, useState , useRef} from "react";
import "./App.css";

function App() {
  const [length, setLength] = useState(10);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [symbolAllowed, setSymbolAllowed] = useState(false);
  const [password , setPassword] = useState("");
  
  // useRef hook
  const passwordRef = useRef(null)

  const passwordGenerator = useCallback(()=>{
      let str = "QWERTYUIOPASDFGHJKLZXCVBNMqwertyuiopasdfghjklzxcvbnm";
      if(numberAllowed) str += "0123456789";
      if(symbolAllowed) str += "~`!@#$%^&*()_+-={[]}'/<,.>?";
      let newPassword = "";
      for(let i=0; i<length ; i++){
        newPassword += str[Math.round(Math.random()*str.length)];
      }
      setPassword(newPassword)
  },[length , numberAllowed , symbolAllowed, setPassword])

  // function randomPassword(){
  //   let str = "QWERTYUIOPASDFGHJKLZXCVBNMqwertyuiopasdfghjklzxcvbnm";
  //   if(numberAllowed) str += "0123456789";
  //   if(symbolAllowed) str += "~`!@#$%^&*()_+-={[]}'/<,.>?";
  //   let newPassword = "";
  //   for(let i=0; i<length ; i++){
  //     newPassword += str[Math.round(Math.random()*str.length)]; 
  //   }
  //   return newPassword
  // }

  useEffect(()=>{
    console.log(length, numberAllowed , symbolAllowed, password);
    passwordGenerator();
    // setPassword(randomPassword())
  },[length , numberAllowed , symbolAllowed, passwordGenerator])

  const copyPasswordToClipboard = useCallback( () => {
    passwordRef.current?.select();
    passwordRef.current?.setSelectionRange(0, 20);
    window.navigator.clipboard.writeText(password)
  },[password])

  return (
    <div className="flex bg-[#121212] h-screen justify-center items-center">
      <div className="bg-gray-700 w-1/2 max-w-[600px] flex flex-col mx-auto my-10 rounded-2xl items-center px-10 py-5 gap-4">
        <h1 className="text-5xl text-white text-wrap text-center">Password Generator</h1>
        <div className="w-full flex rounded-2xl h-12 overflow-hidden flex-nowrap">
          <input
            className="px-4 shrink outline-none text-orange-500 font-semibold w-full"
            type="text"
            placeholder="password"
            value={password}
            ref = {passwordRef}
            readOnly
          />
          <button className="grow-0 shrink-0 px-4 bg-blue-700 font-semibold text-white w-18" 
            // onClick={()=>navigator.clipboard.writeText(password)}
            onClick = {copyPasswordToClipboard}
            >
            Copy
          </button>
        </div>
        <div className="flex gap-6 flex-wrap items-center justify-center">
          <div className="flex gap-2 flex-wrap justify-center items-center">
            <input
              id="lengthInput"
              type="range"
              min="6"
              max="100"
              value={length}
              onChange={(e) => setLength(e.target.value)}
              className="overflow-hidden"  
            />
            <label className="text-orange-500 font-bold" htmlFor="lengthInput">
              Length ({length})
            </label>
          </div>
          <div className="flex gap-2">
            <input
              id="numberInput"
              type="checkbox"
              defaultChecked={numberAllowed}
              onChange={()=>{setNumberAllowed((prev)=>!prev)}}
            />
            <label className="text-orange-500 font-bold" htmlFor="numberInput">
              Numbers
            </label>
          </div>
          <div className="flex gap-2">
            <input
              id="symbolInput"
              type="checkbox"
              defaultChecked={symbolAllowed}
              onChange={()=>{setSymbolAllowed((prev)=>!prev)}}
            />
            <label className="text-orange-500 font-bold" htmlFor="symbolInput">
              Symbol
            </label>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
