import { useState, useCallback, useEffect, useRef } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";

function App() {
  const [length, setLength] = useState(8);
  const [noallowed, setNallowd] = useState(false);
  const [charallowed, setChar] = useState(false);
  const [Password, setPassword] = useState();

  //ref hook
  const PasswordRef = useRef(null);

  const password_Genrator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

    if (noallowed) str += "0123456789";
    if (charallowed) str += "~!@#$%&*()_+-^{}[]=";

    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(char);
    }
    setPassword(pass);
  }, [length, noallowed, charallowed, setPassword]);

  const copyPasswordToCLipboard = useCallback(() => {
    PasswordRef.current?.select();
    PasswordRef.current?.setSelectionRange(0, 5);
    window.navigator.clipboard.writeText(Password);
  }, [Password]);

  useEffect(() => {
    password_Genrator();
  }, [length, noallowed, charallowed]);

  return (
    <>
      <div
        className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 bg-gray-800
       text-orange-500"
      >
        <h1 className="text-white font-bold text-center my-3">
          Password Genrator
        </h1>
        <div className="flex shadow rounded-lg overflow-hidden mb-4">
          <input
            type="text"
            value={Password}
            className="outline-none w-full py-1 px-3"
            placeholder="Password"
            readOnly
            ref={PasswordRef}
          />

          <button
            onClick={copyPasswordToCLipboard}
            className="outline-none bg-blue-500 text-white px-5 py-0.5 shrink-0 hover:bg-gray-500"
          >
            Copy
          </button>
        </div>

        <div className="flex text-sm gap-x-2">
          <div className="flex items-center gap-x-1">
            <input
              type="range"
              min={6}
              max={100}
              value={length}
              className="cursor-pointer"
              onChange={(e) => {
                setLength(e.target.value);
              }}
            />
            <label>Length: {length}</label>
          </div>

          <div className="flex item-center gap-x-1">
            <input
              type="checkbox"
              defaultChecked={noallowed}
              id="numberInput"
              onChange={() => {
                setNallowd((prev) => !prev);
              }}
            />
            <label>Numbers</label>
          </div>

          <div className="flex items-center gap-x-1">
            <input
              type="checkbox"
              defaultChecked={charallowed}
              id="charallowed"
              onChange={() => {
                setChar((prev) => !prev);
              }}
            />
            <label>Characters</label>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
