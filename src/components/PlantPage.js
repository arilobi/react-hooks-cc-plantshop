import React from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";
import { useState, useEffect } from "react";

function PlantPage() {
  const [plants, setPlants] = useState([]);
  // Passing the  initial state as an empty string. 
  const [searchItem, setSearchItem] = useState("");

  // Fetching all the plant data
  useEffect(() => {
    fetch("http://localhost:6001/plants")
    .then((res)=> res.json())
    .then(data =>(
      // The list of plants are stored in plants state using setPlants.
      setPlants(data)
    ))
    // The dependency effect runs only once when the component starts.
  }, [])

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
