
import React, { useState } from "react";
import "./App.css";

function App() {
  const [dictionary] = useState([
    { word: "React", meaning: "A JavaScript library for building user interfaces." },
    { word: "Component", meaning: "A reusable building block in React." },
    { word: "State", meaning: "An object that stores data for a component." }
  ]);

  const [searchTerm, setSearchTerm] = useState("");
  const [result, setResult] = useState("");

  const handleSearch = () => {
    if (!searchTerm.trim()) {
      setResult("Word not found in the dictionary.");
      return;
    }

    const found = dictionary.find(
      entry => entry.word.toLowerCase() === searchTerm.trim().toLowerCase()
    );

    if (found) {
      setResult(found.meaning);
    } else {
      setResult("Word not found in the dictionary.");
    }
  };

  return (
    <div className="app">
      <h1 className="title">Dictionary App</h1>

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
        <h3>Definition:</h3>
        <p>{result}</p>
      </div>
    </div>
  );
}

export default App;
