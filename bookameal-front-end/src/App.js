import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Sidebar from "./components/sidebar/Sidebar";
import Topbar from "./components/topbar/Topbar";
import ProtectedRoute from "./components/ProtectedRoute";
import Home from "./pages/home/home";
import UserList from "./pages/userList/UserList";
// import User from "./pages/userList/user/User";
import User from "./pages/userList/user/User";
import NewUser from "./pages/newUser/NewUser";
import Transactions from "./pages/transactions/Transactions";
import ContactUs from "./components/ContactUs/ContactUs";
import FoodOrders from "./pages/foodOrders/FoodOrders";
import FoodMenu from "./pages/foodMenu/FoodMenu";
import Meals from "./pages/meals/Meals";
import MenuList from "./components/MenuPage/MenuList";
import Profile from "./pages/profile/Profile";
import Logout from "./pages/logout/Logout";
// import Login from "./pages/Login";
import LoginPage from "./components/Login/Login";
// import Signup from "./pages/Signup";
import SignUp from "./components/Sign up/SignUp";
import Navigationbar from "./components/Navbar/Navbar";
import Hero from "./pages/LandingPage/Hero/Hero";
import Chef from "./pages/LandingPage/Chef/Chef";
import Reservation from "./pages/Reservation/Reservation";
import AboutUs from "./pages/About/About";
import Footer from "./components/Footer/Footer";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const [isAuthenticated, setAuthenticated] = useState(false);

  return (
    <Router>
      <Routes>
        {/* Client-side Routes */}
        <Route
          path="/"
          element={
            <>
              <Navigationbar />
              <Hero />
              <Chef />
              <Footer />
            </>
          }
        />
        <Route
          path="/about"
          element={
            <>
              <Navigationbar />
              <AboutUs />
              <Footer />
            </>
          }
        />
        <Route
          path="/reservation"
          element={
            <>
              <Navigationbar />
              <Reservation />
              <Footer />
            </>
          }
        />
        <Route
          path="/menu"
          element={
            <>
              <Navigationbar />
              <MenuList /> <Footer />
            </>
          }
        />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/login" element={<LoginPage />} />
        {/* Admin Panel Routes */}
        <Route
          path="/profile"
          element={
            <ProtectedRoute isAuthenticated={isAuthenticated}>
              <Profile />
            </ProtectedRoute>
          }
        />
        <Route
          path="/*"
          element={
            <ProtectedRoute isAuthenticated={isAuthenticated}>
              <div>
                {isAuthenticated && (
                  <Topbar setAuthenticated={setAuthenticated} />
                )}
                <div className="container">
                  {isAuthenticated && <Sidebar />}
                  <Routes>
                    <Route path="/home" element={<Home />} />
                    <Route path="/users" element={<UserList />} />
                    <Route path="/user/:userId" element={<User />} />
                    <Route path="/newUser" element={<NewUser />} />
                    <Route path="/transactions" element={<Transactions />} />
                    <Route path="/food-orders" element={<FoodOrders />} />
                    <Route path="/food-menu" element={<FoodMenu />} />
                    <Route path="/meals" element={<Meals />} />
                    <Route
                      path="/logout"
                      element={<Logout setAuthenticated={setAuthenticated} />}
                    />
                  </Routes>
                </div>
              </div>
            </ProtectedRoute>
          }
        />
        {/* Authentication Routes */}
        {/* <Route
          path="/login"
          element={<Login setAuthenticated={setAuthenticated} />}
        /> */}
        <Route path="/signup" element={<SignUp />} />
      </Routes>
    </Router>
  );
}

export default App;
