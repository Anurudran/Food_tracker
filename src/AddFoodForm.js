import React, { useState } from 'react';
import { getFoodById } from './api';

const AddFoodForm = ({ onAdd }) => {
  const [foodId, setFoodId] = useState('');
  const [servings, setServings] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    const food = await getFoodById(foodId);
    onAdd(food, servings);
    setFoodId('');
    setServings('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Food ID:
        <input type="text" value={foodId} onChange={(event) => setFoodId(event.target.value)} />
      </label>
      <label>
        Servings:
        <input type="number" step="0.1" value={servings} onChange={(event) => setServings(event.target.value)} />
      </label>
      <button type="submit">Add Food</button>
    </form>
  );
};

export default AddFoodForm;
