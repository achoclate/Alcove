// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navigationbar from './components/Navbar/Navbar';
import Hero from './Pages/LandingPage/Hero/Hero';
import Chef from './Pages/LandingPage/Chef/Chef';
import Reservation from './Pages/Reservation/Reservation';
import AboutUs from './Pages/About/About';
import Login from './components/Login page/Login';
import SignUp from './components/Sign up/SignUp';
import './App.css';
import Footer from './components/Footer/Footer';

const App = () => (
  <Router>
    <Navigationbar /> {/* Add Navigationbar here to appear on every page */}
    <Routes>
      <Route path="/" element={
        <>
          <Hero />
          <Chef />
        </>
      } />
      <Route path="/about" element={<AboutUs />} /> 
      <Route path="/reservation" element={<Reservation />} /> 
      <Route path="/login" element={<Login />} /> 
      <Route path="/signup" element={<SignUp />} /> 
    </Routes>
    <Footer/>
  </Router>
);

export default App;
