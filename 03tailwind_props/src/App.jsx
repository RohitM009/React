import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Card from "./Components/Card";

function App() {
  const [count, setCount] = useState(0);
  const myObj = {
    name: "Rohit",
    age: 21,
  };
  let arr = [1, 2, 3, 4, 5];
  return (
    <>
      <h1 className="bg-blue-400 text-black p-4 rounded-xl mb-4">
        tailwind test
      </h1>
      <Card username="Lenovo " btn="Goto" />
      <Card username="Apple" />
    </>
  );
}

export default App;
