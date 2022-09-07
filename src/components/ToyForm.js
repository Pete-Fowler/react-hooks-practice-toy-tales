import React, { useState } from "react";

function ToyForm({ addNewToy }) {
  const [ formData, setFormData ] = useState({name: '', image: '', likes: 0})

  function handleChange(e) {
    setFormData({
      ...formData, 
      [e.target.name]: e.target.value
    });
  }

  function addToy(e) {
    e.preventDefault();

    const toy = formData;

    fetch("http://localhost:3001/toys", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(toy),
    })
      .then(res => res.json())
      .then(data => addNewToy(data));
  }

console.log(formData);

  return (
    <div className="container">npm 
      <form className="add-toy-form" onSubmit={addToy}>
        <h3>Create a toy!</h3>
        <input
          type="text"
          name="name"
          placeholder="Enter a toy's name..."
          className="input-text"
          value={formData.name} 
          onChange={handleChange}
        />
        <br />
        <input
          type="text"
          name="image"
          placeholder="Enter a toy's image URL..."
          className="input-text" 
          value={formData.image} 
          onChange={handleChange}
        />
        <br />
        <input
          type="submit"
          name="submit"
          value="Create New Toy"
          className="submit"
        />
      </form>
    </div>
  );
}

export default ToyForm;
