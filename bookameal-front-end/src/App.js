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
      <Routes>
        {/* Profile Page - Display without Sidebar and Topbar */}
        <Route
          path="/profile"
          element={
            <ProtectedRoute isAuthenticated={isAuthenticated}>
              <Profile />
            </ProtectedRoute>
          }
        />

        {/* Other Routes - Display with Sidebar and Topbar */}
        <Route
          path="/*"
          element={
            <ProtectedRoute isAuthenticated={isAuthenticated}>
              <div>
                {isAuthenticated && <Topbar setAuthenticated={setAuthenticated} />}
                <div className="container">
                  {isAuthenticated && <Sidebar />}
                  <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/users" element={<UserList />} />
                    <Route path="/user/:userId" element={<User />} />
                    <Route path="/newUser" element={<NewUser />} />
                    <Route path="/transactions" element={<Transactions />} />
                    <Route path="/food-orders" element={<FoodOrders />} />
                    <Route path="/food-menu" element={<FoodMenu />} />
                    <Route path="/meals" element={<Meals />} />
                    <Route path="/logout" element={<Logout setAuthenticated={setAuthenticated} />} />
                  </Routes>
                </div>
              </div>
            </ProtectedRoute>
          }
        />
        <Route path="/login" element={<Login setAuthenticated={setAuthenticated} />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </Router>
  );
}

export default App;
