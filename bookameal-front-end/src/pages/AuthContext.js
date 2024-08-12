// // src/context/AuthContext.js
// import React, { createContext, useState } from "react";

// export const AuthContext = createContext();

// export const AuthProvider = ({ children }) => {
//   const [isAuthenticated, setIsAuthenticated] = useState(false);

//   const setAuthenticated = (value) => {
//     setIsAuthenticated(value);
//   };

//   return (
//     <AuthContext.Provider value={{ isAuthenticated, setAuthenticated }}>
//       {children}
//     </AuthContext.Provider>
//   );
// };
