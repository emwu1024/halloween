import { useState } from 'react';
import {
  seedToValue,
  valueToCategory,
  getCategoryFromRound,
} from '../../utils/utils';
import './Home.css';

// NOTES:
// Seed maxLength set to 16 characters for now.
// Round is 1-indexed and max is set to 10 for now.

function App() {
  const [seed, setSeed] = useState('');
  const [round, setRound] = useState(0);
  const [item, setItem] = useState('');
  const [items, setItems] = useState<string[]>([]);
  const [role, setRole] = useState('');

  function handleGo() {
    if (seed.length === 0) {
      alert("Seed can't be empty.");
      return;
    } else if (round <= 0 || isNaN(round) || round > 6) {
      alert('Round must be a positive integer between 1-6.');
      return;
    } else if (role.length === 0) {
      alert('You must enter a role.');
    } else if (
      role.toLowerCase() != 'beholder' &&
      role.toLowerCase() != 'transgressor'
    ) {
      alert('Not a valid role. Double check your card.');
    } else {
      const seedValue = seedToValue(seed);
      const item = valueToCategory(seedValue, round);
      const allItems = getCategoryFromRound(round);

      console.log('\n\nHERE: ');
      console.log('category: ', item);
      setItem(item);
      setItems(allItems);
    }
  }

  return (
    <>
      <div>
        <h1>Halloween Game</h1>
        <p>Enter the details from your card below</p>
        <div>
          <label>Seed:</label>
          <input
            type="text"
            maxLength={16}
            onChange={(e) => {
              setSeed(e.target.value);
            }}
            required
          />
        </div>

        <div>
          <label>Round: (1-6)</label>
          <input
            type="number"
            max={6}
            onChange={(e) => {
              setRound(e.target.valueAsNumber);
            }}
            required
          />
        </div>

        <div>
          <label>Role: (check your spelling)</label>
          <input
            type="text"
            onChange={(e) => {
              setRole(e.target.value);
            }}
            required
          />
        </div>

        <button onClick={() => handleGo()}>Go!</button>

        <div>
          {role == 'beholder' ? (
            <p>{item}</p>
          ) : role == 'transgressor' ? (
            items.map((currentItem) => <p>{currentItem}</p>)
          ) : (
            <p>Enter a valid role to see the list.</p>
          )}
        </div>
      </div>
    </>
  );
}

export default App;
