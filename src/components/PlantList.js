import React from "react";
import PlantCard from "./PlantCard";

function PlantList({ allPlants, search }) {
  return (
    <ul className="cards">
      {allPlants
      .filter(plant => plant.name.toLowerCase().includes(search.toLowerCase()))
      .map(plant => <PlantCard key={plant.id} plant={plant} />)}
      </ul>
  );
}

export default PlantList;
