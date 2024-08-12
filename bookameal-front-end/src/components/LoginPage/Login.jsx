import React from "react";
import { FaUser, FaLock } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import loginBackground from "../../assets/login.jpeg"; // Import the background image
import "./Login.css";

const LoginPage = () => {
  const navigate = useNavigate();

  // Function to handle login button click
  const handleLogin = (e) => {
    e.preventDefault();
    navigate("/");
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
        <div className="input-box">
          <input type="text" placeholder="Enter Username" required />
          <FaUser className="icon" />
        </div>
        <div className="input-box">
          <input type="password" placeholder="Enter Password" required />
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
            Don't have an account?
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
