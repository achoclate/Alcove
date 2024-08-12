// // import React, { useState } from "react";
// // import { ThemeProvider, CssBaseline, Button } from "@mui/material";
// // import { lightTheme, darkTheme } from "../src/components/Theme/Theme";

// // function App() {
// //   const [darkMode, setDarkMode] = useState(false);

// //   const toggleDarkMode = () => {
// //     setDarkMode(!darkMode);
// //   };

// //   return (
// //     <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
// //       <CssBaseline />
// //       <div style={{ padding: lightTheme.spacing(4) }}>
// //         <Button variant="contained" color="primary" onClick={toggleDarkMode}>
// //           Theme
// //         </Button>
// //         {/* Rest of your application components */}
// //       </div>
// //     </ThemeProvider>
// //   );
// // }

// // export default App;
// import React from "react";
// import ThemeToggle from "./components/Theme/ThemeToggle";

// function App() {
//   return (
//     <div className="App">
//       <ThemeToggle />
//       <h1>Hello, World!</h1>
//       <p>This is a sample application with a theme toggle.</p>
//     </div>
//   );
// }

// export default App;
import React, { useState } from "react";
import { ThemeProvider } from "@mui/material/styles";
import Button from "@mui/material/Button";
import { lightTheme, darkTheme } from "./components/Theme/Theme";
import "./App.css";
import ThemeToggle from "./components/Theme/ThemeToggle";

function App() {
  const [darkMode, setDarkMode] = useState(false);

  const handleThemeToggle = () => {
    setDarkMode(!darkMode);
    document.body.classList.toggle("dark-mode", !darkMode);
  };

  const theme = darkMode ? darkTheme : lightTheme;

  return (
    <ThemeProvider theme={theme}>
      <div
        style={{ position: "relative", minHeight: "100vh", padding: "30px" }}
      >
        <h1>Welcome to My App</h1>
        <Button onClick={handleThemeToggle}>
          <ThemeToggle />
        </Button>
      </div>
    </ThemeProvider>
  );
}

export default App;
