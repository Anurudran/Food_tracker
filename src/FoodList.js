import React from 'react';
import FoodItem from './FoodItem';

const FoodList = ({ foods, servings, onDelete }) => {
  return (
    <div className="food-list">
      {foods.map((food, index) => (
        <FoodItem key={index} food={food} servings={servings[index]} onDelete={() => onDelete(index)} />
      ))}
    </div>
  );
};

export default FoodList;
