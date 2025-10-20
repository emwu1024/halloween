import { useState } from 'react';
import { seedToValue, valueToCategory } from '../../utils/utils';
import reactLogo from '../../assets/react.svg';
import viteLogo from '/vite.svg';
import './Home.css';

// NOTES:
// Seed maxLength set to 16 characters for now.
// Round is 1-indexed and max is set to 10 for now.

function App() {
  const [count, setCount] = useState(0);
  const [seed, setSeed] = useState('');
  const [round, setRound] = useState(0);

  function handleGo() {
    if (seed.length === 0) {
      alert("Seed can't be empty.");
      return;
    } else if (round <= 0 || isNaN(round) || round > 6) {
      alert('Round must be a positive integer between 1-6.');
      return;
    } else {
      const seedValue = seedToValue(seed);
      const category = valueToCategory(seedValue, round);

      console.log('\n\nHERE: ');
      console.log('category: ', category);
    }
  }

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
          required
        />

        <label>Round:</label>
        <input
          type="number"
          max={6}
          onChange={(e) => {
            setRound(e.target.valueAsNumber);
          }}
          required
        />

        <button onClick={() => handleGo()}>Go!</button>

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
