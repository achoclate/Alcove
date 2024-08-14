import React from "react";
import { Route, Routes } from "react-router-dom";
import BrunchNavbar from "./components/BrunchNavbar/BrunchNavbar";
import App from "./App"; // Import Brunch's App component
// import "./BrunchApp.css";

const BrunchRoutes = () => (
  <div>
    <BrunchNavbar />
    <Routes>
      <Route path="/" element={<App />} />
      {/* Add other Brunch specific routes if needed */}
    </Routes>
  </div>
);

export default BrunchRoutes;
