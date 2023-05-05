import React from 'react';

const FoodItem = ({ food, servings, onDelete }) => {
  const { description, foodNutrients } = food;
  const calories = Math.round(servings * foodNutrients.find(n => n.nutrient.name === 'Energy').amount);
  const protein = Math.round(servings * foodNutrients.find(n => n.nutrient.name === 'Protein').amount);

  return (
    <div className="food-item">
      <div className="food-details">
        <h3>{description}</h3>
        <p>Servings: {servings}</p>
      </div>
      <div className="food-nutrients">
        <p>Calories: {calories}</p>
        <p>Protein: {protein}g</p>
      </div>
      <button onClick={onDelete}>Delete</button>
    </div>
  );
};

export default FoodItem;
