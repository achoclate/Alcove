import React, { useState } from "react";
import "./Menu.css"; // Importing the CSS file
import Order from "../Orders/Order"; // Importing the Order component

const riceBiryaniItems = [
  {
    id: 1,
    name: "Chicken Biryani",
    img: "https://images.pexels.com/photos/5940906/pexels-photo-5940906.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    description: "A delicious chicken biryani with flavorful spices.",
    price: "$10",
  },
  {
    id: 2,
    name: "Mutton Biryani",
    img: "https://images.pexels.com/photos/461198/pexels-photo-461198.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    description: "Rich mutton biryani with tender pieces of meat.",
    price: "$12",
  },
  {
    id: 3,
    name: "Vegetable Biryani",
    img: "https://images.pexels.com/photos/1267320/pexels-photo-1267320.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    description: "A healthy vegetable biryani made with fresh ingredients.",
    price: "$8",
  },
  {
    id: 4,
    name: "Egg Biryani",
    img: "https://images.pexels.com/photos/1438673/pexels-photo-1438673.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    description: "Egg biryani cooked with fragrant basmati rice.",
    price: "$9",
  },
];

const otherMealsItems = [
  {
    id: 1,
    name: "Chicken Curry",
    img: "https://images.pexels.com/photos/6205507/pexels-photo-6205507.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    description: "A rich and spicy chicken curry.",
    price: "$11",
  },
  {
    id: 2,
    name: "Paneer Butter Masala",
    img: "https://images.pexels.com/photos/11320442/pexels-photo-11320442.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    description: "Creamy paneer butter masala with rich tomato gravy.",
    price: "$10",
  },
  {
    id: 3,
    name: "Tandoori Chicken",
    img: "https://images.pexels.com/photos/6705293/pexels-photo-6705293.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    description: "Spicy tandoori chicken grilled to perfection.",
    price: "$13",
  },
  {
    id: 4,
    name: "Butter Naan",
    img: "https://images.pexels.com/photos/7190371/pexels-photo-7190371.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    description: "Soft and fluffy butter naan.",
    price: "$3",
  },
];

const coffeeAndDrinksItems = [
  {
    id: 1,
    name: "Cold Coffee",
    img: "https://images.pexels.com/photos/1070899/pexels-photo-1070899.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    description:
      "A refreshing cold coffee with a perfect blend of coffee and milk.",
    price: "$5",
  },
  {
    id: 2,
    name: "Iced Latte",
    img: "https://images.pexels.com/photos/4099123/pexels-photo-4099123.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    description: "Smooth iced latte made with freshly brewed coffee.",
    price: "$6",
  },
  {
    id: 3,
    name: "Mango Smoothie",
    img: "https://images.pexels.com/photos/2274322/pexels-photo-2274322.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    description: "A sweet and tangy mango smoothie.",
    price: "$4",
  },
  {
    id: 4,
    name: "Lemonade",
    img: "https://images.pexels.com/photos/4947947/pexels-photo-4947947.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    description: "Refreshing lemonade with a hint of mint.",
    price: "$3",
  },
];

const Menu = () => {
  const [orders, setOrders] = useState([]);
  const [activeDropdown, setActiveDropdown] = useState(null);

  const toggleDropdown = (category) => {
    setActiveDropdown(activeDropdown === category ? null : category);
  };

  const addToOrder = (item) => {
    setOrders([...orders, item]);
  };

  const renderItems = (items) => {
    return items.map((item, index) => (
      <div
        key={item.id}
        className={`menu-card ${index % 2 === 0 ? "card-left" : "card-right"}`}
      >
        <div className="menu-card-content">
          <img src={item.img} alt={item.name} className="menu-card-image" />
          <div className="menu-card-details">
            <label>
              <strong>Meal Name:</strong> {item.name}
            </label>
            <label>
              <strong>Description:</strong> {item.description}
            </label>
            <label>
              <strong>Price:</strong> {item.price}
            </label>
            <button className="order-button" onClick={() => addToOrder(item)}>
              Add to Order
            </button>
          </div>
        </div>
      </div>
    ));
  };

  return (
    <>
      <span id="menu"></span>
      <div className="menu-container">
        <div className="menu-header">
          <p className="menu-subtitle">Our Menu</p>
          <h1 className="menu-title">Menu</h1>
          <p className="menu-description">
            Explore our variety of dishes categorized into Rice Biryani, Other
            Meals, and Coffee & Drinks.
          </p>
        </div>

        <div className="menu-grid">
          {/* Rice Biryani Section */}
          <div className="menu-category">
            <div
              className="category-header"
              onClick={() => toggleDropdown("riceBiryani")}
            >
              <h2>Rice Biryani</h2>
              <span className="dropdown-arrow">
                {activeDropdown === "riceBiryani" ? "▲" : "▼"}
              </span>
            </div>
            {activeDropdown === "riceBiryani" && (
              <div className="dropdown-content">
                {renderItems(riceBiryaniItems)}
              </div>
            )}
          </div>

          {/* Other Meals Section */}
          <div className="menu-category">
            <div
              className="category-header"
              onClick={() => toggleDropdown("otherMeals")}
            >
              <h2>Other Meals</h2>
              <span className="dropdown-arrow">
                {activeDropdown === "otherMeals" ? "▲" : "▼"}
              </span>
            </div>
            {activeDropdown === "otherMeals" && (
              <div className="dropdown-content">
                {renderItems(otherMealsItems)}
              </div>
            )}
          </div>

          {/* Coffee and Drinks Section */}
          <div className="menu-category">
            <div
              className="category-header"
              onClick={() => toggleDropdown("coffeeAndDrinks")}
            >
              <h2>Coffee and Drinks</h2>
              <span className="dropdown-arrow">
                {activeDropdown === "coffeeAndDrinks" ? "▲" : "▼"}
              </span>
            </div>
            {activeDropdown === "coffeeAndDrinks" && (
              <div className="dropdown-content">
                {renderItems(coffeeAndDrinksItems)}
              </div>
            )}
          </div>
        </div>

        {/* Orders Section */}
        {/* <Order orders={orders} /> */}
        <div>
          <Order orders={orders} setOrders={setOrders} />
        </div>
      </div>
    </>
  );
};

export default Menu;
