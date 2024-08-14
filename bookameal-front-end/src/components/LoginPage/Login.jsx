import React, { useState } from "react";
import { FaUser, FaLock } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import loginBackground from "../../assets/login.jpeg"; // Import the background image
import "./Login.css";

const LoginPage = ({ onLogin }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState(""); // State for error messages
  const navigate = useNavigate();

  // Function to handle login button click
  const handleLogin = async (e) => {
    e.preventDefault();
    setErrorMessage(""); // Clear any previous error messages

    try {
      const response = await fetch("http://localhost:5000/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username, password }),
      });

      if (response.ok) {
        // Assuming the response has a JSON body with user data
        const data = await response.json();
        alert("Login successful!");
        onLogin(data); // Pass user data to parent component
        navigate("/"); // Redirect to home page
      } else {
        const data = await response.json();
        setErrorMessage(data.message || "An error occurred during login.");
      }
    } catch (error) {
      setErrorMessage("Error during login: " + error.message);
      console.error("Error during login:", error);
    }
  };

  // Redirect to signup page function
  const handleRegister = () => {
    navigate("/signup");
  };

  return (
    <div
      className="wrapper"
      style={{
        backgroundImage: `url(${loginBackground})`, // Use the imported image
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <form onSubmit={handleLogin}>
        <h1>Login</h1>
        {errorMessage && <div className="error-message">{errorMessage}</div>}
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
            </a>{" "}
          </p>
        </div>
      </form>
    </div>
  );
};

export default LoginPage;
