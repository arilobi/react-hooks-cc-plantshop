import React from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";
import { useState } from "react";

function PlantPage() {;

    const [plants, setPlants] = useState([
      {
        id: 1,
        name: "Aloe",
        image: "./images/aloe.jpg",
        price: 15.99,
      },
      {
        id: 2,
        name: "ZZ Plant",
        image: "./images/zz-plant.jpg",
        price: 25.98,
      },
      {
        id: 3,
        name: "Pilea peperomioides",
        image: "./images/pilea.jpg",
        price: 5.99,
      },
      {
        id: 4,
        name: "Pothos",
        image: "./images/pothos.jpg",
        price: 12.11,
      },
      {
        id: 5,
        name: "Jade",
        image: "./images/jade.jpg",
        price: 10.37,
      },
      {
        id: 6,
        name: "Monstera Deliciosa",
        image: "./images/monstera.jpg",
        price: 25.99,
      },
      {
        id: 7,
        name: "Fiddle Leaf Fig",
        image: "./images/fiddle-leaf-fig.jpg",
        price: 55,
      },
    ]);

  const [searchItem, setSearchItem] = useState("");

  // Adding a new plant by using the spread operator.
  const handleAddPlant = (newPlant) => {
    setPlants([...plants, newPlant]);
  };

  // The (item) is an input and when the user uses it, it updates the setSearchItem state.
  const handleSearch = (item) => {
    setSearchItem(item);
  }

  // Filtering the plants array when seraching.
  const filteredPlants = plants.filter((plant) =>
    // This is to check if the plant matches what the user is searching for.
    plant.name.includes(searchItem)
  );
 
  // Rendering 
  return (
    <main>
      {/* Passing the handleAddPlant as a prop from NewPlantForm so that it updates the list in the PlantPage. The same applies to the Search and PlantList */}
      <NewPlantForm onAddPlant={handleAddPlant}/>
      <Search onSearch={handleSearch} />
      <PlantList plants={filteredPlants}/>
    </main>
  );
}

export default PlantPage;
