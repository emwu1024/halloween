import { useState } from "react";
import reactLogo from "../../assets/react.svg";
import viteLogo from "/vite.svg";
import "./Home.css";

// NOTES: Seed maxLength set to 16 characters for now

function App() {
  const [count, setCount] = useState(0);
  const [seed, setSeed] = useState("");
  const [round, setRound] = useState("");

  return (
    <>
      <div>
        <h1>Halloween Game</h1>
        <label>Enter seed here:</label>
        <input
          type="text"
          maxLength={16}
          onChange={(e) => {
            setSeed(e.target.value);
          }}
        />

        <label>Round Number:</label>
        <input
          type="text"
          maxLength={16}
          onChange={(e) => {
            setRound(e.target.value);
          }}
        />

        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
    </>
  );
}

export default App;
