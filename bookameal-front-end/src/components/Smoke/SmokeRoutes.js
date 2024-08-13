import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { SmokeNavbar } from './components';
import App from './App'; // Import Smoke's App component
import './SmokeApp.css';

const SmokeRoutes = () => (
  <div>
    <SmokeNavbar /> {/* Render Smoke specific navbar */}
    <Routes>
      <Route path="/" element={<App />} />
      {/* Add other Smoke specific routes if needed */}
    </Routes>
  </div>
);

export default SmokeRoutes;
