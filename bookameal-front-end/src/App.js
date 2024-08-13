import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navigationbar from './components/Navbar/Navbar'; // Global Navbar
import Hero from './Pages/LandingPage/Hero/Hero';
import Chef from './Pages/LandingPage/Chef/Chef';
import Reservation from './Pages/Reservation/Reservation';
import AboutUs from './Pages/About/About';
import Login from './components/LoginPage/Login';
import SignUp from './components/SignUp/SignUp';
import ContactUs from './components/ContactUs/ContactUs';
import MenuList from './components/MenuPage/MenuList';
import Footer from './components/Footer/Footer';
import SmokeRoutes from './components/Smoke/SmokeRoutes'; // Import Smoke routes

const App = () => (
  <Router>
    <Routes>
      {/* Global Routes */}
      <Route path="/" element={
        <>
          <Navigationbar />
          <Hero />
          <Chef />
          <Footer />
        </>
      } />
      <Route path="/about" element={
        <>
          <Navigationbar />
          <AboutUs />
          <Footer />
        </>
      } />
      <Route path="/reservation" element={
        <>
          <Navigationbar />
          <Reservation />
          <Footer />
        </>
      } />
      <Route path="/login" element={
        <>
          <Navigationbar />
          <Login />
          <Footer />
        </>
      } />
      <Route path="/signup" element={
        <>
          <Navigationbar />
          <SignUp />
          <Footer />
        </>
      } />
      <Route path="/contact" element={
        <>
          <Navigationbar />
          <ContactUs />
          <Footer />
        </>
      } />
      <Route path="/menu" element={
        <>
          <Navigationbar />
          <MenuList />
          <Footer />
        </>
      } />

      {/* Smoke Routes - No Footer */}
      <Route path="/smoke/*" element={<SmokeRoutes />} />
    </Routes>
  </Router>
);

export default App;
