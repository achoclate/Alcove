import React, { useState, useEffect } from "react";
import "./MealCard.css";

const MealCard = ({ meal }) => {
  const [showPopup, setShowPopup] = useState(false);
  const [mealDetails, setMealDetails] = useState(null);

  useEffect(() => {
    if (showPopup && meal?.idMeal) {
      fetch(
        `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${meal.idMeal}`
      )
        .then((res) => res.json())
        .then((data) => {
          setMealDetails(data.meals[0]);
        })
        .catch((error) => {
          console.error("Error fetching meal details:", error);
        });
    }
  }, [showPopup, meal?.idMeal]);

  if (!meal) {
    return null;
  }

  const togglePopup = () => {
    setShowPopup(!showPopup);
  };

  return (
    <>
      <div className="card" onClick={togglePopup}>
        <img
          src={meal.strMealThumb || "fallback-image.jpg"}
          alt={meal.strMeal || "Meal Image"}
        />
        <div className="info">
          <h2>{meal.strMeal || "Meal Name"}</h2>
          <p>${meal.price || "Price"}</p>
        </div>
      </div>
      {showPopup && mealDetails && (
        <div className="popup" onClick={togglePopup}>
          <div className="popup-content" onClick={(e) => e.stopPropagation()}>
            <h2>{mealDetails.strMeal || "Meal Name"}</h2>
            <img
              src={mealDetails.strMealThumb || "fallback-image.jpg"}
              alt={mealDetails.strMeal || "Meal Image"}
            />
            <h3>Ingredients</h3>
            <ul>
              {Array.from({ length: 20 }).map((_, index) => {
                const ingredient = mealDetails[`strIngredient${index + 1}`];
                return ingredient ? <li key={index}>{ingredient}</li> : null;
              })}
            </ul>
            <h3>Description</h3>
            <p>{mealDetails.strInstructions || "No description available"}</p>
            <button onClick={togglePopup}>Close</button>
          </div>
        </div>
      )}
    </>
  );
};

export default MealCard;
