import React, { useState } from "react";

function NewPlantForm({addPlant}) {
  const [formData, setFormData] = useState({
    name:'',
    image:'',
    price:''
  })

  function handleFormChange(e) {
    const newFormData = {...formData, [e.target.name]: e.target.value};
    setFormData(newFormData)
  }

  function handleFormSubmit(e) {
    e.preventDefault();
    const plantObj = {
      name: formData.name,
      image: formData.image,
      price: formData.price
    }
    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(plantObj)
    }
    fetch('http://localhost:6001/plants', options)
      .then(res => res.json())
      .then(data => addPlant(data))
  }

  return (
    <div className="new-plant-form">
      <h2>New Plant</h2>
      <form onSubmit={handleFormSubmit}>
        <input type="text" name="name" placeholder="Plant name" onChange={handleFormChange} value={formData.name} />
        <input type="text" name="image" placeholder="Image URL" onChange={handleFormChange} value={formData.image} />
        <input type="number" name="price" step="0.01" placeholder="Price" onChange={handleFormChange} value={formData.price} />
        <button type="submit">Add Plant</button>
      </form>
    </div>
  );
  }

export default NewPlantForm;
