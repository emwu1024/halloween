import { useState, useEffect } from "react";
import {
  seedToValue,
  valueToCategory,
  getCategoryFromRound,
} from "../../utils/utils";
import { createRain } from "../../utils/rain";
import Rain from "../../components/rain/rain";
import "./Home.css";
import sound from "../../assets/thunderSFX.mp3";

// NOTES:
// Seed maxLength set to 16 characters for now.
// Round is 1-indexed and max is set to 10 for now.

function App() {
  const [seed, setSeed] = useState("");
  const [round, setRound] = useState(0);
  const [item, setItem] = useState("");
  const [items, setItems] = useState<string[]>([]);
  const [role, setRole] = useState("");

  // useEffect(() => {
  //   createRain(); // this contains DOM code
  // }, []);

  function handleGo() {
    if (seed.length === 0) {
      alert("Seed can't be empty.");
      return;
    } else if (round <= 0 || isNaN(round) || round > 6) {
      alert("Round must be a positive integer between 1-6.");
      return;
    } else if (role.length === 0) {
      alert("You must enter a role.");
    } else if (
      role.toLowerCase() != "bystander" &&
      role.toLowerCase() != "murderer"
    ) {
      alert("Not a valid role. Double check your card.");
    } else {
      const seedValue = seedToValue(seed);
      const item = valueToCategory(seedValue, round);
      const allItems = getCategoryFromRound(round);

      console.log("\n\nHERE: ");
      console.log("category: ", item);
      setItem(item);
      setItems(allItems);
    }
  }

  return (
    <>
      <div className="home-container">
        <h1>A Stab In The Dark</h1>
        <p>Enter the details from your card below</p>
        <div className="input-container">
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

        <div className="input-container">
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

        <div className="input-container">
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
          {role.toLowerCase() == "bystander" ? (
            <p>{item}</p>
          ) : role.toLowerCase() == "murderer" ? (
            items.map((currentItem) => <p>{currentItem}</p>)
          ) : (
            <p>Enter a valid role to see the list.</p>
          )}
        </div>
      </div>

      <audio src={sound} controls loop autoPlay />
      <Rain />
    </>
  );
}

export default App;
