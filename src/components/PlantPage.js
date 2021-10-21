import React, { useState, useEffect } from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";

function PlantPage() {
  const [allPlants, setAllPlants] = useState([])
  const [search, setSearch] = useState('');

  useEffect(() => {
    fetch('http://localhost:6001/plants')
    .then(response => response.json())
    .then(data => setAllPlants(data))
  }, [])

  function handleSearchChange(e) {
    setSearch(e.target.value);
  }

  function addPlant(newPlant){
    setAllPlants([...allPlants, newPlant])
  }
  
  return (
    <main>
      <NewPlantForm addPlant={addPlant}/>
      <Search search={search} handleSearchChange={handleSearchChange}/>
      <PlantList allPlants={allPlants} search={search}/>
    </main>
  );
}

export default PlantPage;
