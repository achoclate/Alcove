// src/components/MealOfTheDay/MealOfTheDay.js
import React, { useState } from 'react';
import './MealOfTheDay.css';

const MealOfTheDay = () => {
  const [selectedMeal, setSelectedMeal] = useState(null);

  const menuOptions = [
    { id: 1, name: 'Grilled Chicken Salad' },
    { id: 2, name: 'Vegetarian Pizza' },
    { id: 3, name: 'Beef Burger' },
    { id: 4, name: 'Spaghetti Bolognese' },
  ];

  const handleMealSelection = (meal) => {
    setSelectedMeal(meal);
    console.log(`Selected Meal: ${meal.name}`);
  };

  return (
    <div className="meal-of-the-day">
      <h1>Meal of the Day</h1>
      <p>Hello, the menu items for today are specially crafted for you!</p>
      <ul>
        {menuOptions.map((meal) => (
          <li key={meal.id}>
            <button onClick={() => handleMealSelection(meal)}>
              {meal.name}
            </button>
          </li>
        ))}
      </ul>

      {selectedMeal && (
        <div className="selected-meal">
          <h3>You have selected: {selectedMeal.name}</h3>
          <button onClick={() => setSelectedMeal(null)}>Change Selection</button>
        </div>
      )}
    </div>
  );
};

export default MealOfTheDay;