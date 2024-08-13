// import React from "react";
// import { FaUser, FaLock } from "react-icons/fa";
// import { useNavigate } from "react-router-dom";
// import loginBackground from "../../assets/login.jpeg"; // Import the background image
// import "./Login.css";

// const Login = () => {
//   const navigate = useNavigate();

//   // Function to handle login button click
//   const handleLogin = (e) => {
//     e.preventDefault();
//     navigate("/");
//   };

//   // Redirect to signup page function
//   const handleRegister = () => {
//     navigate("/signup");
//   };

//   return (
//     <div
//       className="wrapper"
//       style={{
//         backgroundImage: `url(${loginBackground})`, // Use the imported image
//         backgroundSize: "cover",
//         backgroundPosition: "center",
//         backgroundRepeat: "no-repeat",
//       }}
//     >
//       <form onSubmit={handleLogin}>
//         <h1>Login</h1>
//         <div className="input-box">
//           <input type="text" placeholder="Enter Username" required />
//           <FaUser className="icon" />
//         </div>
//         <div className="input-box">
//           <input type="password" placeholder="Enter Password" required />
//           <FaLock className="icon" />
//         </div>
//         <div className="remember-forgot">
//           <label>
//             <input type="checkbox" />
//             Remember me
//           </label>
//           <a href="#">Forgot Password?</a>
//         </div>
//         <button type="submit">Login</button>
//         <div className="register-link">
//           <p>
//             Don't have an account?
//             <a href="#" onClick={handleRegister}>
//               Register
//             </a>{" "}
//           </p>
//         </div>
//       </form>
//     </div>
//   );
// };

// export default Login;
import React, { useState } from "react";
import { FaUser, FaLock } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../contexts/AuthContext";
import loginBackground from "../../assets/login.jpeg";
import "./Login.css";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();
  const { login } = useAuth();

  const validateUsername = (input) => /^[a-zA-Z0-9_]{3,16}$/.test(input);
  const validatePassword = (input) =>
    /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(input);

  const handleLogin = async (e) => {
    e.preventDefault();

    if (!validateUsername(username)) {
      setErrorMessage(
        "Invalid username: Must be 3-16 characters and contain only letters, numbers, or underscores."
      );
      return;
    }

    if (!validatePassword(password)) {
      setErrorMessage(
        "Invalid password: Must be at least 8 characters long and contain at least one number, one uppercase and one lowercase letter."
      );
      return;
    }

    setErrorMessage("");

    try {
      const response = await fetch("http://localhost:5000/api/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username, password }),
      });

      const data = await response.json();

      if (response.ok) {
        // Use the login function from context
        login(data.token);

        // Navigate to the home page
        navigate("/");
      } else {
        setErrorMessage(data.message || "Login failed. Please try again.");
      }
    } catch (error) {
      setErrorMessage("An error occurred. Please try again later.");
    }
  };

  const handleRegister = () => {
    navigate("/signup");
  };

  return (
    <div
      className="wrapper"
      style={{
        backgroundImage: `url(${loginBackground})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <form onSubmit={handleLogin}>
        <h1>Login</h1>
        <div className="input-box">
          <input
            type="text"
            placeholder="Enter Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
          <FaUser className="icon" />
        </div>
        <div className="input-box">
          <input
            type="password"
            placeholder="Enter Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <FaLock className="icon" />
        </div>
        {errorMessage && <p className="error-message">{errorMessage}</p>}
        <div className="remember-forgot">
          <label>
            <input type="checkbox" />
            Remember me
          </label>
          <a href="#">Forgot Password?</a>
        </div>
        <button type="submit">Login</button>
        <div className="register-link">
          <p>
            Don't have an account?{" "}
            <a href="#" onClick={handleRegister}>
              Register
            </a>
          </p>
        </div>
      </form>
    </div>
  );
};

export default Login;
