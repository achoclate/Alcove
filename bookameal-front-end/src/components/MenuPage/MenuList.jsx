import React, { useState, useEffect } from "react";
import MealCard from "./MealCard";
import Orders from "../../pages/Orders/Orders";
import "./MenuList.css";

const MenuList = () => {
  const [meals, setMeals] = useState([]);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(true);
  const [sortType, setSortType] = useState("name");
  const [orders, setOrders] = useState([]);
  const [notificationCount, setNotificationCount] = useState(0);

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
    setNotificationCount(notificationCount + 1);
    sendEmailNotification(order);
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
  const sendEmailNotification = (order) => {
    // Implement backend service
    console.log("Sending email notification for order:", order);
  };
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
        <button onClick={() => handleSort("strMeal")}>Sort by Name</button>
        <button onClick={() => handleSort("strCategory")}>
          Sort by Category
        </button>
        <button onClick={() => handleSort("price")}>Sort by Price</button>
      </div>
      <div className="container">
        {loading ? (
          <p className="loading">Loading meals...</p>
        ) : error ? (
          <p className="notFound">
            Sorry, there was an error fetching meals. Please try again later.
          </p>
        ) : meals.length === 0 ? (
          <p className="notFound">
            No meals found. Please check back later for updates.
          </p>
        ) : (
          // meals.map((meal) => <MealCard key={meal.idMeal} meal={meal} />)
          <div className="meal-section">
            <h1>OUR MENU</h1>
            <div className="menu-section">
              {meals.map((meal) => (
                <MealCard key={meal.idMeal} meal={meal} addOrder={addOrder} />
              ))}
            </div>
          </div>
        )}
      </div>
      <Orders
        orders={orders}
        resetNotification={() => setNotificationCount(0)}
      />
      <div className="notification-icon">
        {notificationCount > 0 && <span>{notificationCount}</span>}
      </div>
    </div>
  );
};

export default MenuList;
