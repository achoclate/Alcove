import React, { useState } from "react";
import "./SignUp.css";
import { FaUser, FaLock, FaEnvelope } from "react-icons/fa";
import loginBackground from "../../assets/login.jpeg";
import { useNavigate } from "react-router-dom";

const SignUp = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [errorMessage, setErrorMessage] = useState(""); // State for error messages
  const history = useNavigate();

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
    setShowConfirmPassword(true);
  };

  const validateUsername = (input) => {
    const regex = /^[a-zA-Z0-9_]{3,16}$/;
    return regex.test(input);
  };

  const validateEmail = (input) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(input);
  };

  const validatePassword = (input) => {
    const regex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/;
    return regex.test(input);
  };

  const handleSignup = async (e) => {
    e.preventDefault();
    setErrorMessage(""); // Clear any previous error messages

    if (!validateUsername(username)) {
      setErrorMessage("Invalid username. It should be 3-16 characters long and can include letters, numbers, and underscores.");
      return;
    }

    if (!validateEmail(email)) {
      setErrorMessage("Invalid email format.");
      return;
    }

    if (!validatePassword(password)) {
      setErrorMessage("Invalid password. It should be at least 8 characters long and include at least one number, one uppercase letter, and one lowercase letter.");
      return;
    }

    if (password !== confirmPassword) {
      setErrorMessage("Passwords don't match.");
      return;
    }

    try {
      const response = await fetch("http://localhost:5000/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username, email, password }),
      });

      if (response.ok) {
        alert("User created successfully"); // Display success message
        history("/login"); // Redirect to login page
      } else {
        const data = await response.json();
        setErrorMessage(data.message || "An error occurred during signup.");
        console.log(data.message);
      }
    } catch (error) {
      setErrorMessage("Error during signup: " + error.message);
      console.error("Error during signup:", error);
    }
  };

  const handleLogin = () => {
    history("/login");
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
      <form onSubmit={handleSignup}>
        <h1>Signup</h1>
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
            type="email"
            placeholder="Enter Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <FaEnvelope className="icon" />
        </div>
        <div className="input-box">
          <input
            type="password"
            placeholder="Enter Password"
            value={password}
            onChange={handlePasswordChange}
            required
          />
          <FaLock className="icon" />
        </div>
        {showConfirmPassword && (
          <div className="input-box">
            <input
              type="password"
              placeholder="Confirm Password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
            />
            <FaLock className="icon" />
          </div>
        )}
        <button type="submit">Signup</button>
        <div className="register-link">
          <p>
            Already have an account?{" "}
            <a href="#" onClick={handleLogin}>
              Login
            </a>
          </p>
        </div>
      </form>
    </div>
  );
};

export default SignUp;
