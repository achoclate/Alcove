import React, { useState } from "react";
import "./Signup.css";
import { FaUser, FaLock, FaEnvelope } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const SignUp = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const history = useNavigate();

  // Error handling function
  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
    setShowConfirmPassword(true);
  };

  // Validation function for username
  const validateUsername = (input) => {
    const regex = /^[a-zA-Z0-9_]{3,16}$/;
    return regex.test(input);
  };

  // Validation function for email
  const validateEmail = (input) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(input);
  };

  // Validation function for password
  const validatePassword = (input) => {
    const regex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/;
    return regex.test(input);
  };

  const handleSignup = (e) => {
    e.preventDefault();
    history("/");
    // Perform input validation
    if (!validateUsername(username)) {
      console.log("Invalid username");
      return;
    }

    if (!validateEmail(email)) {
      console.log("Invalid email");
      return;
    }

    if (!validatePassword(password)) {
      console.log("Invalid password");
      return;
    }

    if (password !== confirmPassword) {
      console.log("Passwords don't match");
      return;
    }
  };
  const handleLogin = () => {
    history("/login");
  };
  return (
    <div className="wrapper">
      <form onSubmit={handleSignup}>
        <h1>Signup</h1>
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
