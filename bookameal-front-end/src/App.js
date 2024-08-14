// // src/App.js
// import React from "react";
// import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// import "bootstrap/dist/css/bootstrap.min.css";
// import NavigationBar from "./components/Navbar/Navbar";
// import Hero from "./Pages/LandingPage/Hero/Hero";
// import Chef from "./Pages/LandingPage/Chef/Chef";
// import Reservation from "./Pages/Reservation/Reservation";
// import AboutUs from "./Pages/About/About";
// import "./App.css";
// import Footer from "./components/Footer/Footer";
// import SignUp from "./components/SignUp/SignUp";
// import MenuList from "./components/MenuPage/MenuList";
// import Login from "./components/Login/Login";
// import ContactUs from "./components/ContactUs/ContactUs";
// import Orders from "./Pages/Orders/Orders";

// const App = () => (
//   <Router>
//     <NavigationBar /> {/* Add Navigationbar here to appear on every page */}
//     <Routes>
//       <Route
//         path="/"
//         element={
//           <>
//             <Hero />
//             <Chef />
//           </>
//         }
//       />
//       <Route path="/about" element={<AboutUs />} /> {/* About Us page route */}
//       <Route path="/reservation" element={<Reservation />} />{" "}
//       <Route path="/login" element={<Login />} />{" "}
//       <Route path="/signup" element={<SignUp />} />{" "}
//       <Route path="/contact" element={<ContactUs />} />{" "}
//       <Route path="/menu" element={<MenuList />} />{" "}
//       <Route path="/orders" element={<Orders />} />{" "}
//     </Routes>
//     <Footer />
//   </Router>
// );

// export default App;
// src/App.js
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import NavigationBar from "./components/Navbar/Navbar";
import Hero from "./Pages/LandingPage/Hero/Hero";
import Chef from "./Pages/LandingPage/Chef/Chef";
import Reservation from "./Pages/Reservation/Reservation";
import AboutUs from "./Pages/About/About";
import "./App.css";
import Footer from "./components/Footer/Footer";
import SignUp from "./components/SignUp/SignUp";
import MenuList from "./components/MenuPage/MenuList";
import Login from "./components/Login/Login";
import ContactUs from "./components/ContactUs/ContactUs";
import Orders from "./Pages/Orders/Orders";
import { OrderProvider } from "../src/Pages/Orders/Order"; // Import OrderProvider

const App = () => (
  <OrderProvider>
    {" "}
    {/* Wrap your application with OrderProvider */}
    <Router>
      <NavigationBar /> {/* Add Navigationbar here to appear on every page */}
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Hero />
              <Chef />
            </>
          }
        />
        <Route path="/about" element={<AboutUs />} />{" "}
        {/* About Us page route */}
        <Route path="/reservation" element={<Reservation />} />{" "}
        <Route path="/login" element={<Login />} />{" "}
        <Route path="/signup" element={<SignUp />} />{" "}
        <Route path="/contact" element={<ContactUs />} />{" "}
        <Route path="/menu" element={<MenuList />} />{" "}
        <Route path="/orders" element={<Orders />} />{" "}
      </Routes>
      <Footer />
    </Router>
  </OrderProvider>
);

export default App;
