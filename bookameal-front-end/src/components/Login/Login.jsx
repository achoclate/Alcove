// import React from "react";
// import "./Login.css";
// import { FaUser, FaLock } from "react-icons/fa";
// import { useNavigate } from "react-router-dom";
// const Login = () => {
//   const history = useNavigate();

//   // Function to handle login button click
//   const handleLogin = (e) => {
//     e.preventDefault();
//     history("/");
//   };

//   // Redirect to signup page function
//   const handleRegister = () => {
//     history("/signup");
//   };

//   return (
//     <div className="wrapper">
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
import "./Login.css";
import { FaUser, FaLock } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  // Function to handle login button click
  const handleLogin = (e) => {
    e.preventDefault();

    const hardcodedUsername = "user";
    const hardcodedPassword = "password";

    if (username === hardcodedUsername && password === hardcodedPassword) {
      navigate("/");
    } else {
      setError("Invalid username or password");
    }
  };

  // Redirect to signup page function
  const handleRegister = () => {
    navigate("/signup");
  };

  return (
    <div className="wrapper">
      <form onSubmit={handleLogin}>
        <h1>Login</h1>
        {error && <p className="error">{error}</p>}
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
            Don't have an account?
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
