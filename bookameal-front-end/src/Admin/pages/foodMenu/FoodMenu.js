import { useState, useEffect } from "react";
import "./foodMenu.css";

export default function FoodMenu() {
  const [newFood, setNewFood] = useState({ name: "", category: "", price: "", image: null });
  const [foodList, setFoodList] = useState([]);

  // Fetch food list from the backend on component mount
  useEffect(() => {
    fetch('https://alcove.onrender.com/foods') // Ensure this URL matches your Flask server
      .then(response => response.json())
      .then(data => setFoodList(data))
      .catch(error => console.error('Error fetching food data:', error));
  }, []);

  // Handle input changes for adding new food
  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === "image") {
      setNewFood({ ...newFood, image: files[0] });
    } else {
      setNewFood({ ...newFood, [name]: value });
    }
  };

  // Handle adding new food
  const handleAddFood = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('name', newFood.name);
    formData.append('category', newFood.category);
    formData.append('price', newFood.price);
    if (newFood.image) {
      formData.append('file', newFood.image); // Changed 'image' to 'file' to match Flask backend
    }

    try {
      await fetch('https://alcove.onrender.com/foods', { // Ensure this URL matches your Flask server
        method: 'POST',
        body: formData,
      });
      // Refresh the food list after adding new food
      const response = await fetch('https://alcove.onrender.com/foods');
      const data = await response.json();
      setFoodList(data);
      setNewFood({ name: "", category: "", price: "", image: null });
    } catch (error) {
      console.error('Error adding food:', error);
    }
  };

  return (
    <div className="foodMenu">
      <h2 className="foodMenuTitle">Food Menu</h2>
      <form className="foodMenuForm" onSubmit={handleAddFood}>
        <input
          type="text"
          name="name"
          placeholder="Food Name"
          value={newFood.name}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="category"
          placeholder="Category"
          value={newFood.category}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="price"
          placeholder="Price"
          value={newFood.price}
          onChange={handleChange}
          required
        />
        <input
          type="file"
          name="image"
          onChange={handleChange}
        />
        <button type="submit">Add Food</button>
      </form>
      <div className="foodMenuTableContainer">
        <table className="foodMenuTable">
          <thead>
            <tr>
              <th>Name</th>
              <th>Category</th>
              <th>Price</th>
              <th>Image</th>
            </tr>
          </thead>
          <tbody>
            {foodList.map((food) => (
              <tr key={food.id}>
                <td>{food.name}</td>
                <td>{food.category}</td>
                <td>${food.price.toFixed(2)}</td>
                <td>
                  <img
                    src={`https://alcove.onrender.com${food.image_url}`}
                    alt={food.name}
                    className="foodImage"
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
