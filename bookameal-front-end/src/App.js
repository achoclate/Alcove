// src/App.js
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Sidebar from "./components/sidebar/Sidebar";
import Topbar from "./components/topbar/Topbar";
import ProtectedRoute from "./components/ProtectedRoute";
import "./App.css";
import Home from "./pages/home/Home";
import UserList from "./pages/userList/UserList";
import User from "./pages/user/User";
import NewUser from "./pages/newUser/NewUser";
import Transactions from "./pages/transactions/Transactions";
import FoodOrders from "./pages/foodOrders/FoodOrders";
import FoodMenu from "./pages/foodMenu/FoodMenu";
import Meals from "./pages/meals/Meals";
import Profile from "./pages/profile/Profile";
import Logout from "./pages/logout/Logout";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import { useState } from "react";

function App() {
  const [isAuthenticated, setAuthenticated] = useState(false);

  return (
    <Router>
      {isAuthenticated && <Topbar />}
      <div className="container">
        {isAuthenticated && <Sidebar />}
        <Routes>
          <Route
            path="/"
            element={
              <ProtectedRoute isAuthenticated={isAuthenticated}>
                <Home />
              </ProtectedRoute>
            }
          />
          <Route
            path="/users"
            element={
              <ProtectedRoute isAuthenticated={isAuthenticated}>
                <UserList />
              </ProtectedRoute>
            }
          />
          <Route
            path="/user/:userId"
            element={
              <ProtectedRoute isAuthenticated={isAuthenticated}>
                <User />
              </ProtectedRoute>
            }
          />
          <Route
            path="/newUser"
            element={
              <ProtectedRoute isAuthenticated={isAuthenticated}>
                <NewUser />
              </ProtectedRoute>
            }
          />
          <Route
            path="/transactions"
            element={
              <ProtectedRoute isAuthenticated={isAuthenticated}>
                <Transactions />
              </ProtectedRoute>
            }
          />
          <Route
            path="/food-orders"
            element={
              <ProtectedRoute isAuthenticated={isAuthenticated}>
                <FoodOrders />
              </ProtectedRoute>
            }
          />
          <Route
            path="/food-menu"
            element={
              <ProtectedRoute isAuthenticated={isAuthenticated}>
                <FoodMenu />
              </ProtectedRoute>
            }
          />
          <Route
            path="/meals"
            element={
              <ProtectedRoute isAuthenticated={isAuthenticated}>
                <Meals />
              </ProtectedRoute>
            }
          />
          <Route
            path="#profile"
            element={
              <ProtectedRoute isAuthenticated={isAuthenticated}>
                <Profile />
              </ProtectedRoute>
            }
          />
          <Route
            path="#logout"
            element={
              <ProtectedRoute isAuthenticated={isAuthenticated}>
                <Logout />
              </ProtectedRoute>
            }
          />
          <Route path="/login" element={<Login setAuthenticated={setAuthenticated} />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
