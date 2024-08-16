import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navigationbar from './components/Navbar/Navbar';
import Hero from './Pages/LandingPage/Hero/Hero';
import Chef from './Pages/LandingPage/Chef/Chef';
import Reservation from './Pages/Reservation/Reservation';
import AboutUs from './Pages/About/About';
import Login from './components/LoginPage/Login';
import SignUp from './components/SignUp/SignUp';
import ContactUs from './components/ContactUs/ContactUs';
import MenuList from './components/MenuPage/MenuList';
import SmokeApp from './components/Smoke/App';
import Footer from './components/Footer/Footer';
import UserProfile from './Pages/UserProfile/UserProfile';
import Orders from './components/Orders/Orders';
import MealOfTheDay from './Pages/MealOfTheDay/MealOfTheDay';
import Payment from './Payments/Payment';
import AdminRoutes from './Admin/AdminRoutes';
import BrunchRoutes from "./components/Brunch/BrunchRoutes";
import { OrderProvider } from './OrderContext';
import './App.css';

const App = () => {
  const [user, setUser] = useState(null);

  const handleLogin = (userData) => {
    setUser(userData);
  };

  const handleLogout = () => {
    setUser(null);
  };

  return (
    <Router>
      <OrderProvider>
        <Routes>
          {/* Public Routes */}
          <Route
            path="/*"
            element={
              <>
                <Navigationbar user={user} onLogout={handleLogout} />
                <main>
                  <Routes>
                    <Route path="/" element={<><Hero /><Chef /></>} />
                    <Route path="/about" element={<AboutUs />} />
                    <Route path="/reservation" element={<Reservation />} />
                    <Route path="/login" element={<Login onLogin={handleLogin} />} />
                    <Route path="/signup" element={<SignUp />} />
                    <Route path="/contact" element={<ContactUs />} />
                    <Route path="/menu" element={<MenuList />} />
                    <Route path="/payment" element={<Payment />} />
                    <Route path="/orders" element={<Orders />} />
                    <Route path="/smoke/*" element={<SmokeApp />} />
                    <Route path="/meal-of-the-day" element={<MealOfTheDay />} />
                    <Route path="/profile" element={<UserProfile user={user} onLogout={handleLogout} />} />
                    <Route path="/brunch" element={<BrunchRoutes />} />
                    <Route path="*" element={<div>404 Not Found</div>} />
                  </Routes>
                </main>
                <Footer />
              </>
            }
          />

          {/* Admin Routes */}
          <Route
            path="/admin/*"
            element={<AdminRoutes />} 
          />
        </Routes>
      </OrderProvider>
    </Router>
  );
};

export default App;
