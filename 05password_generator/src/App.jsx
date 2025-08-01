import { useState, useCallback, useEffect,useRef } from "react";
import "./App.css";

function App() {
  const [length, setlength] = useState(8);
  const [numberAllowed, setnumberAllowed] = useState(false);
  const [charAllowed, setcharAllowed] = useState(false);

  const [Password, setPassword] = useState("");

  //ref hook
  const passwordRef = useRef(null)

  const passGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

    if (numberAllowed) str += "0123456789";
    if (charAllowed) str += "!@#$%^&*()+=_-~`";

    for (let i = 1; i < length; i++) {
      let char = Math.floor(Math.random() * str.length + 1);

      pass += str.charAt(char);
    }

    setPassword(pass);
  }, [length, numberAllowed, charAllowed, setPassword]);

  const copyPassword = useCallback(() => {
    passwordRef.current?.select();
    window.navigator.clipboard.writeText(Password)
  },[Password])
  // const copyPassword = useCallback(() => {
  //   passwordRef.current?.select();
  //   passwordRef.current?.setSelectionRange(0, 4);
  //   window.navigator.clipboard.writeText(Password.substring(0,4))
  // },[Password])

  useEffect( () => {
    passGenerator()
  },[length , numberAllowed,charAllowed,passGenerator])

 

  return (
    <>
      <div
        className="w-full max-w-md mx-auto shadow-md 
        rounded-lg px-4 py-4 my-20 text-white bg-gray-700 text-2xl text-center" 
      ><div className=" mb-3">PassWord Generator</div> 
        <div className="flex shadow rounded-lg overflow-hidden mb-4 bg-gray-500 text-yellow-400">
          <input
            type="text"
            value={Password}
            className="outline-none w-full py-1 px-3"
            placeholder="Password"
            ref = {passwordRef}
          />

          <button onClick={copyPassword} className="outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0">
            copy
          </button>
        </div>
        <div className="flex text-sm gap-x-2">
          <div className="flex items-center gap-x-1">
            <input
              type="range"
              min={6}
              max={30}
              value={length}
              className="cursor-pointer"
              onChange={(e) => {
                setlength(e.target.value);
              }}
            />
            <label>Length : {length}</label>
          </div>

          <div className="flex items-center gap-x-1">
            <input
              type="checkbox"
              defaultChecked={numberAllowed}
              id="numberInput"
              onChange={() => {
                setnumberAllowed((p) => !p);
              }}
            />
            <label htmlFor="numberInput">Numbers</label>
          </div>

          <div className="flex items-center gap-x-1">
            <input
              type="checkbox"
              defaultChecked={charAllowed}
              id="charInput"
              onChange={() => {
                setcharAllowed((p) => !p);
              }}
            />
            <label htmlFor="charInput">Special Symbols</label>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
