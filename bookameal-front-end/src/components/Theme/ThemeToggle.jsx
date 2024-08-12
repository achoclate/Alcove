// // import React, { useState } from "react";
// // import { ThemeProvider } from "@mui/material/styles";
// // import { lightTheme, darkTheme } from "./Theme"; // Import your themes
// // import { FaToggleOff, FaToggleOn } from "react-icons/fa6"; // Import FontAwesome icons

// // const ThemeToggle = () => {
// //   const [isDarkMode, setIsDarkMode] = useState(false);

// //   const handleThemeToggle = () => {
// //     setIsDarkMode(!isDarkMode);
// //   };

// //   return (
// //     <ThemeProvider theme={isDarkMode ? darkTheme : lightTheme}>
// //       {/* React Button for Theme Toggle */}
// //       <button onClick={handleThemeToggle} style={buttonStyles}>
// //         {isDarkMode ? <FaToggleOn size={30} /> : <FaToggleOff size={30} />}
// //       </button>
// //       {/* Your other components will go here */}
// //     </ThemeProvider>
// //   );
// // };

// // // Inline styles for the button
// // const buttonStyles = {
// //   padding: "10px 20px",
// //   backgroundColor: "#007bff", // Set a visible background color
// //   border: "none",
// //   borderRadius: "50px",
// //   color: "white",
// //   cursor: "pointer",
// //   position: "absolute",
// //   right: "30px",
// //   top: "30px",
// //   fontSize: "1rem",
// //   outline: "none",
// //   display: "flex",
// //   alignItems: "center",
// //   gap: "10px", // Space between icon and text if both are used
// //   zIndex: 1000, // Ensure it's on top of other elements
// // };

// // export default ThemeToggle;
// import React, { useState } from "react";
// import { ThemeProvider } from "@mui/material/styles";
// import { lightTheme, darkTheme } from "./Theme"; // Import your themes
// import { FaToggleOff, FaToggleOn } from "react-icons/fa6"; // Import FontAwesome icons

// const ThemeToggle = () => {
//   const [isDarkMode, setIsDarkMode] = useState(false);

//   const handleThemeToggle = () => {
//     setIsDarkMode(!isDarkMode);
//   };

//   return (
//     <ThemeProvider theme={isDarkMode ? darkTheme : lightTheme}>
//       <div style={{ minHeight: "100vh" }}>
//         {" "}
//         {/* Ensures full height for theme application */}
//         {/* React Button for Theme Toggle */}
//         <button onClick={handleThemeToggle} style={buttonStyles}>
//           {isDarkMode ? (
//             <FaToggleOn size={30} color="white" /> // Change icon color to white for dark mode
//           ) : (
//             <FaToggleOff size={30} color="black" /> // Default icon color for light mode
//           )}
//         </button>
//         {/* Your other components go here */}
//         <div style={{ padding: "20px" }}>
//           <h1>{isDarkMode ? "Dark Mode" : "Light Mode"} is active</h1>
//           <p>Toggle the button to switch themes.</p>
//         </div>
//       </div>
//     </ThemeProvider>
//   );
// };

// // Inline styles for the button
// const buttonStyles = {
//   padding: "10px 20px",
//   backgroundColor: "transparent", // No background color for the button
//   border: "none",
//   borderRadius: "50px",
//   cursor: "pointer",
//   position: "absolute",
//   right: "30px",
//   top: "30px",
//   fontSize: "1rem",
//   outline: "none",
//   display: "flex",
//   alignItems: "center",
//   zIndex: 1000,
// };

// export default ThemeToggle;
import React, { useState } from "react";
import { ThemeProvider } from "@mui/material/styles";
import { lightTheme, darkTheme } from "./Theme"; // Import your themes
import { FaToggleOff, FaToggleOn } from "react-icons/fa6"; // Import FontAwesome icons

const ThemeToggle = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const handleThemeToggle = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <ThemeProvider theme={isDarkMode ? darkTheme : lightTheme}>
      <div style={{ minHeight: "100vh" }}>
        {" "}
        {/* Ensures full height for theme application */}
        {/* React Button for Theme Toggle */}
        <button onClick={handleThemeToggle} style={buttonStyles}>
          {isDarkMode ? (
            <FaToggleOn size={30} color="white" /> // Change icon color to white for dark mode
          ) : (
            <FaToggleOff size={30} color="black" /> // Default icon color for light mode
          )}
        </button>
        {/* Your other components go here */}
        <div style={{ padding: "20px" }}>
          <h1>{isDarkMode ? "Dark Mode" : "Light Mode"} is active</h1>
          <p>Toggle the button to switch themes.</p>
        </div>
      </div>
    </ThemeProvider>
  );
};

// Inline styles for the button
const buttonStyles = {
  padding: "10px 20px",
  backgroundColor: "transparent", // No background color for the button
  border: "none",
  borderRadius: "50px",
  cursor: "pointer",
  position: "absolute",
  right: "30px",
  top: "30px",
  fontSize: "1rem",
  outline: "none",
  display: "flex",
  alignItems: "center",
  zIndex: 1000,
};

export default ThemeToggle;
