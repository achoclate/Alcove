import React, { useState, useEffect } from 'react';
import './MealOfTheDay.css';

const MealOfTheDay = () => {
  const [selectedMeal, setSelectedMeal] = useState(null);
  const [menuOptions, setMenuOptions] = useState([]);

  useEffect(() => {
    const fetchMenuOptions = async () => {
      try {
        const response = await fetch('https://alcove.onrender.com/foods'); // Adjust URL if needed
        if (response.ok) {
          const data = await response.json();
          setMenuOptions(data);
        } else {
          console.error('Error fetching menu options:', response.statusText);
        }
      } catch (error) {
        console.error('Error fetching menu options:', error);
      }
    };

    fetchMenuOptions();
  }, []);

  const handleMealSelection = (meal) => {
    setSelectedMeal(meal);
    console.log(`Selected Meal: ${meal.name}`);
  };

  return (
    <div className="meal-of-the-day">
      <h1>Meal of the Day</h1>
      <p>Explore our special menu items crafted just for you today!</p>
      <ul className="menu-list">
        {menuOptions.map((meal) => (
          <li key={meal.id} className="menu-item">
            <button onClick={() => handleMealSelection(meal)} className="meal-button">
              {meal.name}
            </button>
            <div className="meal-details">
              {meal.image_url && (
                <img
                  src={`https://alcove.onrender.com${meal.image_url}`} // Ensure this matches your Flask server setup
                  alt={meal.name}
                  className="meal-image"
                />
              )}
              <p>Category: {meal.category}</p>
              <p>Price: ${meal.price.toFixed(2)}</p>
            </div>
          </li>
        ))}
      </ul>

      {selectedMeal && (
        <div className="selected-meal">
          <h3>You have selected: {selectedMeal.name}</h3>
          {selectedMeal.image_url && (
            <img
              src={`https://alcove.onrender.com${selectedMeal.image_url}`} // Ensure this matches your Flask server setup
              alt={selectedMeal.name}
              className="selected-meal-image"
            />
          )}
          <p>Category: {selectedMeal.category}</p>
          <p>Price: ${selectedMeal.price.toFixed(2)}</p>
          <button onClick={() => setSelectedMeal(null)} className="change-selection-button">
            Change Selection
          </button>
        </div>
      )}
    </div>
  );
};

export default MealOfTheDay;
