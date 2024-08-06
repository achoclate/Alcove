// src/App.jsx

import React from "react";
// import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ContactUs from "./components/ContactUs/ContactUs";
// import ContactUsForm from "./components/ContactUs/ContactUsForm";
// Import other components as needed

const App = () => {
  return (
    <>
      <ContactUs />
      {/* <ContactUsForm /> */}
    </>
    // <Router>
    //   <Routes>
    //     <Route path="/contact" element={<ContactUs />} />
    //     {/* Add other routes as needed */}
    //   </Routes>
    // </Router>
  );
};

export default App;
