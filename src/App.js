import React, { useState } from 'react';
import './App.css';
import AddFoodForm from './AddFoodForm';
import FoodList from './FoodList.js';

const App = () => {
  const [foods, setFoods] = useState([]);
  const [servings, setServings] = useState([]);

  const handleAddFood = (food, servings) => {
    setFoods([...foods, food]);
    setServings([...servings, servings]);
  };

  const handleDeleteFood = (index) => {
    setFoods(foods.filter((_, i) => i !== index));
    setServings(servings.filter((_, i) => i !== index));
  };

  return (
    <div className="App">
      <h1>Protein and Calorie Tracker</h1>
      <AddFoodForm onAdd={handleAddFood} />
      <FoodList foods={foods} servings={servings} onDelete={handleDeleteFood} />
    </div>
  );
};

export default App;
