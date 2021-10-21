import React, { useState } from "react";

function PlantCard( {plant}) {
  const [inStock, setInStock] = useState ('In Stock')

  function handleStock() {
    setInStock(inStock === 'In Stock' ? '⚠️OUT OF STOCK⚠️' : 'In Stock')
  }

  
  
  
  return (
    <li className="card">
      <img src={plant.image} alt={plant.name} />
      <h4>{plant.name}</h4>
      <p>Price: ${plant.price}</p>
     <button className="primary" onClick={handleStock}>{inStock}</button>
     
    </li>
  );
}

export default PlantCard;
