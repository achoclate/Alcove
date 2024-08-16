import React, { useState, useEffect } from "react";
import MealCard from "./MealCard";
import "./MenuList.css";

const MenuList = () => {
  const [meals, setMeals] = useState([]);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(true);
  const [sortType, setSortType] = useState("name");
  const [orders, setOrders] = useState([]);
  const [notificationCount, setNotificationCount] = useState(0);
  const [searchTerm, setSearchTerm] = useState("");
  const [filterOption, setFilterOption] = useState("strMeal");

  useEffect(() => {
    fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=`)
      .then((res) => res.json())
      .then((data) => {
        setLoading(false);
        if (data.meals) {
          const mealsWithPrice = data.meals.map((meal) => ({
            ...meal,
            price: (Math.random() * 20 + 35).toFixed(2),
          }));
          setMeals(mealsWithPrice);
          setError(false);
        } else {
          setMeals([]);
          setError(true);
        }
      })
      .catch((error) => {
        console.error("Error fetching meals:", error);
        setLoading(false);
        setError(true);
      });
  }, []);

  const addOrder = (order) => {
    const updatedOrders = [...orders, order];
    setOrders(updatedOrders);
    localStorage.setItem("orders", JSON.stringify(updatedOrders));
    setNotificationCount(updatedOrders.length);
  };

  const handleSort = (type) => {
    const sortedMeals = [...meals].sort((a, b) => {
      if (type === "price") {
        return parseFloat(a.price) - parseFloat(b.price);
      } else {
        return a[type].localeCompare(b[type]);
      }
    });
    setMeals(sortedMeals);
    setSortType(type);
  };

  const handleSearch = (e) => {
    setSearchTerm(e.target.value.toLowerCase());
  };

  const handleFilterChange = (e) => {
    setFilterOption(e.target.value);
  };

  const filteredMeals = meals.filter((meal) =>
    meal[filterOption].toLowerCase().includes(searchTerm)
  );

  return (
    <div className="main">
      <div className="heading">
        <h1>Welcome to Alcove Culnary!</h1>
        <h4>
          Discover a variety of delicious meals. Click on a meal to learn more
          about it.
        </h4>
      </div>
      <div className="filters">
        <input
          type="text"
          placeholder="Search..."
          value={searchTerm}
          onChange={handleSearch}
        />
        <select value={filterOption} onChange={handleFilterChange}>
          <option value="strMeal">Name</option>
          <option value="strCategory">Category</option>
          <option value="price">Price</option>
        </select>
      </div>
      <div className="container">
        {loading ? (
          <p className="loading">Loading meals...</p>
        ) : error ? (
          <p className="notFound">
            Sorry, there was an error fetching meals. Please try again later.
          </p>
        ) : filteredMeals.length === 0 ? (
          <p className="notFound">
            No meals found. Please check back later for updates.
          </p>
        ) : (
          <div className="meal-section">
            <h1>OUR MENU</h1>
            <div className="menu-section">
              {filteredMeals.map((meal) => (
                <MealCard key={meal.idMeal} meal={meal} addOrder={addOrder} />
              ))}
            </div>
          </div>
        )}
      </div>
      <div className="notification-icon">
        {notificationCount > 0 && <span>{notificationCount}</span>}
      </div>
    </div>
  );
};

export default MenuList;