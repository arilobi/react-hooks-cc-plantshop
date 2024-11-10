import React from "react";
import { useState } from 'react';

function NewPlantForm({ onAddPlant }) {
  // Setting the initial state to empty so that the user can be able add a new plant.
  const [name, setName] = useState("");
  const [image, setImage] = useState("");
  const [price, setPrice] = useState("");

  // This prevents the form from submitting
  const handleSubmit = (e) => {
    e.preventDefault();

  // Function to add a new plant and using parseFloat for the user to be specific with their price.
  const newPlant = {
    name,
    image,
    price: parseFloat(price),
  };

  // Fetching the data but using a POST request to add a new plant to the backend.
  fetch("http://localhost:6001/plants", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(newPlant),
  })
    .then((res) => res.json())
    .then((addedPlant) => {
      // After the server responds, the onAddPlant function is called and updates the plants array in the PlantPage component
      onAddPlant(addedPlant); 
    });

    // This is to reset the form after submitting.
     setName("");
     setImage("");
     setPrice("");
    };

    

  return (
    <div className="new-plant-form">
      <h2>New Plant</h2>

      {/* The onChange event listener updates the state wheb the user types. */}
      <form onSubmit={handleSubmit}>
        <input type="text" name="name" placeholder="Plant name" value={name} onChange={(e) => setName(e.target.value)}/>
        <input type="text" name="image" placeholder="Image URL" value={image} onChange={(e) => setImage(e.target.value)}/>
        <input type="number" name="price" step="0.01" placeholder="Price" value={price}  onChange={(e) => setPrice(e.target.value)} />
        <button type="submit">Add Plant</button>
      </form>
    </div>
  );
}

export default NewPlantForm;
