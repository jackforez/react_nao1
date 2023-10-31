import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Bai1 from "./cps/Bai1";
function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="bg-red-500">
      <h3 className="text-red-500">abc</h3>
      <Bai1 />
    </div>
  );
}

export default App;
