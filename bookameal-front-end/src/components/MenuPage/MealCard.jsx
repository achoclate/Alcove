import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./MealCard.css";

const MealCard = ({ meal }) => {
  const [showPopup, setShowPopup] = useState(false);
  const [mealDetails, setMealDetails] = useState(null);
  const navigate = useNavigate();

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
  const handleOrderClick = () => {
    navigate("/orders");
  };

  return (
    <>
      <div className="card-container">
        <div className="card">
          <div className="card-section" onClick={togglePopup}>
            <img
              src={meal.strMealThumb || "fallback-image.jpg"}
              alt={meal.strMeal || "Meal Image"}
            />
            <div className="info">
              <h2>{meal.strMeal || "Meal Name"}</h2>
              <p>${meal.price || "Price"}</p>
              <button className="order-now-button" onClick={handleOrderClick}>
                Order Now
              </button>
            </div>
          </div>
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
            <p className="ingredients">
              {Array.from({ length: 20 })
                .map((_, index) => mealDetails[`strIngredient${index + 1}`])
                .filter(Boolean)
                .join(", ")}
            </p>
            <h3>Description</h3>
            <p>{mealDetails.strInstructions || "No description available"}</p>
            <button className="order-now-button">Order Now</button>
            <button className="close-button" onClick={togglePopup}>
              Close
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default MealCard;