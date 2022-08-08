import React, { useState } from "react";
import Card from "./Components/Card/Card"
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai"

import './App.css';

function App() {
  const [temValue, setTemValue] = useState(18)
  const [temColor, setTemColor] = useState("cold")

  const incTem = () => {
    const newTem = temValue + 1
    if (newTem >= 21) {
      setTemColor("hot")
    }
    setTemValue(newTem)
  }

  const decTem = () => {
    const newTem = temValue - 1
    if (newTem < 21) {
      setTemColor("cold")
    }
    setTemValue(newTem)
  }

  return (
    <div className="App">
      <Card className={temColor}>
        {/* Temperature Display */}
        <div className="temperature-display">
          <span>{temValue} °C</span>
        </div>
        {/* Temperature Buttons */}
        <div className="temperature-buttons">
          <button onClick={decTem}>
            <AiOutlineMinus />
          </button>

          <button onClick={incTem}>
            <AiOutlinePlus />
          </button>
        </div>
      </Card>
    </div>
  );
}

export default App;
