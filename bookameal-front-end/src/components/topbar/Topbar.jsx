import React, { useState } from "react";
import "./topbar.css";
import { NotificationsNone, Language, Settings, AccountCircle } from "@material-ui/icons";
import { Link, useNavigate } from "react-router-dom";

export default function Topbar({ setAuthenticated }) {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const navigate = useNavigate();

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const handleLogout = () => {
    fetch("http://localhost:5000/logout", {
      method: "POST",
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data.message);
        localStorage.removeItem("authToken"); // Clear authentication data
        if (typeof setAuthenticated === 'function') {
          setAuthenticated(false); // Update authentication state
        } else {
          console.error('setAuthenticated is not a function');
        }
        navigate("/login"); // Redirect to login page
      })
      .catch((error) => {
        console.error("Logout error:", error);
        localStorage.removeItem("authToken");
        if (typeof setAuthenticated === 'function') {
          setAuthenticated(false);
        }
        navigate("/login");
      });
  };

  return (
    <div className="topbar">
      <div className="topbarWrapper">
        <div className="logo">Admin Panel</div>
        <div className="topRight">
          <div className="topbarIconContainer">
            <NotificationsNone />
            <span className="topIconBadge">2</span>
          </div>
          <div className="topbarIconContainer">
            <Language />
            <span className="topIconBadge">2</span>
          </div>
          <div className="topbarIconContainer" onClick={toggleDropdown}>
            <Settings />
          </div>
          <div className="topbarProfileContainer">
            <AccountCircle className="topAvatar" onClick={toggleDropdown} />
            {dropdownOpen && (
              <div className="profileDropdown">
                <Link to="/profile" className="dropdownItem">
                  Profile
                </Link>
                <div className="dropdownItem" onClick={handleLogout}>
                  LogOut
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
