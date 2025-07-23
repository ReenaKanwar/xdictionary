
import React, { useState } from "react";
import "./App.css";

function App() {
  const [dictionary] = useState([
    { word: "React", meaning: "A JavaScript library for building user interfaces." },
    { word: "Component", meaning: "A reusable building block in React." },
    { word: "State", meaning: "An object that stores data for a component." }
  ]);

  const [searchTerm, setSearchTerm] = useState("");
  const [result, setResult] = useState(null);

  const handleSearch = () => {
    const found = dictionary.find(
      entry => entry.word.toLowerCase() === searchTerm.trim().toLowerCase()
    );
    setResult(found ? found.meaning : "Word not found in the dictionary.");
  };

  return (
    <div className="app">
      <h1 className="title">XDictionary</h1>
      <div className="search-container">
        <input
          type="text"
          value={searchTerm}
          placeholder="Enter a word"
          onChange={(e) => setSearchTerm(e.target.value)}
          className="search-input"
        />
        <button onClick={handleSearch} className="search-button">
          Search
        </button>
      </div>

      <div className="result-container">
        {result && result !== "Word not found in the dictionary." ? (
          <>
            <h3>Definition:</h3>
            <p>{result}</p>
          </>
        ) : result === "Word not found in the dictionary." ? (
          <p>{result}</p>
        ) : null}
      </div>
    </div>
  );
}

export default App;
