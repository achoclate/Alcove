import React from 'react';
import { createRoot } from 'react-dom/client'; // Import createRoot from react-dom/client
import App from './App';
import { OrderProvider } from './OrderContext'; // Adjust the path if necessary

const root = createRoot(document.getElementById('root')); // Create a root
root.render(
  <OrderProvider>
    <App />
  </OrderProvider>
);