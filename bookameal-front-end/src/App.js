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
import UserProfile from './Pages/UserProfile/UserProfile'; // Import UserProfile
import './App.css';

const App = () => {
  const [user, setUser] = useState(null);

  const handleLogin = (userData) => {
    setUser(userData); // userData should include user details
  };

  const handleLogout = () => {
    setUser(null);
  };

  return (
    <Router>
      <Navigationbar user={user} onLogout={handleLogout} />
      <Routes>
        <Route path="/" element={<><Hero /><Chef /></>} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/reservation" element={<Reservation />} />
        <Route path="/login" element={<Login onLogin={handleLogin} />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/menu" element={<MenuList />} />
        <Route path="/smoke/*" element={<SmokeApp />} />
        <Route path="/profile" element={<UserProfile user={user} onLogout={handleLogout} />} /> {/* Profile route */}
      </Routes>
      <Footer/>
    </Router>
  );
};

export default App;
