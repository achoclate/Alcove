// src/pages/foodMenu/FoodMenu.js
import { useState } from "react";
import "./foodMenu.css";

export default function FoodMenu() {
  const [newFood, setNewFood] = useState({ name: "", category: "", image: null });
  const [foodList, setFoodList] = useState([]);

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === "image") {
      setNewFood({ ...newFood, image: files[0] });
    } else {
      setNewFood({ ...newFood, [name]: value });
    }
  };

  const handleAddFood = (e) => {
    e.preventDefault();
    setFoodList([...foodList, newFood]);
    setNewFood({ name: "", category: "", image: null });
  };

  return (
    <div className="foodMenu">
      <h1 className="foodMenuTitle">Food Menu</h1>
      <form className="foodMenuForm" onSubmit={handleAddFood}>
        <input
          type="text"
          name="name"
          value={newFood.name}
          placeholder="Food Name"
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="category"
          value={newFood.category}
          placeholder="Category"
          onChange={handleChange}
          required
        />
        <input
          type="file"
          name="image"
          onChange={handleChange}
          required
        />
        <button type="submit">Add Food</button>
      </form>
      <div className="foodMenuTableContainer">
        <table className="foodMenuTable">
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Category</th>
              <th>Image</th>
            </tr>
          </thead>
          <tbody>
            {foodList.map((food, index) => (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{food.name}</td>
                <td>{food.category}</td>
                <td>
                  {food.image ? (
                    <img
                      src={URL.createObjectURL(food.image)}
                      alt={food.name}
                      className="foodImage"
                    />
                  ) : (
                    "No Image"
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
