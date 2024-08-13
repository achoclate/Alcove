import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function Logout({ setAuthenticated }) {
  const navigate = useNavigate();

  useEffect(() => {
    // Clear authentication data
    localStorage.removeItem("authToken"); // Adjust if using different storage or authentication method

    // Notify the backend about logout (optional if needed for server-side session invalidation)
    fetch("http://localhost:5000/logout", {
      method: "POST",
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data.message);
        if (typeof setAuthenticated === 'function') {
          setAuthenticated(false); // Update authentication state
        } else {
          console.error('setAuthenticated is not a function');
        }
        // Redirect to login page after successful logout
        navigate("/login");
      })
      .catch((error) => {
        console.error("Logout error:", error);
        navigate("/login"); // Redirect to login in case of error
      });
  }, [navigate, setAuthenticated]);

  return <div>Logging out...</div>;
}
