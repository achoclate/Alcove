// src/pages/foodOrders/FoodOrders.js
import "./foodOrders.css";

export default function FoodOrders() {
  return (
    <div className="foodOrders">
      <h1 className="foodOrdersTitle">Food Orders</h1>
      <div className="foodOrdersTableContainer">
        <table className="foodOrdersTable">
          <thead>
            <tr>
              <th>ID</th>
              <th>Date</th>
              <th>Customer</th>
              <th>Food Item</th>
              <th>Category</th>
              <th>Quantity</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {/* Add rows here */}
          </tbody>
        </table>
      </div>
    </div>
  );
}
