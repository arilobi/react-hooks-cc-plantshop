import React from "react";
import { useState } from "react";

function PlantCard({ plant }) {
  const [isSoldOut, setIsSoldOut] = useState(true);

  // This function triggeres the Out of stock button and toggle the initial state (false) to (true) and mark it as sold out.
  const handleStockToggle = () => {

  // Currently, the previous State is true because it's in it's initial state but the !prevState will flip it to be false and thus make it to be in Stock. This makes it possible to switch between the two options.
    setIsSoldOut(prevState => !prevState);
  }

  // Rendering
  return (
    <li className="card" data-testid="plant-item">
      <img src={plant.image} alt={plant.name} />
      <h4>{plant.name}</h4>
      <p>Price: {plant.price}</p>
      {isSoldOut ? (
        <button onClick={handleStockToggle} className="primary">In Stock</button>
      ) : (
        <button onClick={handleStockToggle}>Out of Stock</button>
      )}
    </li>
    
  );
}

export default PlantCard;
