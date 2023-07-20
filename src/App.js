import React, { useEffect, useState } from 'react';
import { getAllStarships } from './services/sw-api';
import './style.css';

function App() {
  const [starships, setStarships] = useState([]);

  useEffect(() => {
    fetchStarships();
  }, []);

  const fetchStarships = async () => {
    const starshipsData = await getAllStarships();
    setStarships(starshipsData);
  };

  return (
    <div className="App">
      <h1>Star Wars Starships</h1>
      <div className="card-container">
        {starships.map((starship) => (
          <div className="card" key={starship.name}>
            <h2>{starship.name}</h2>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;