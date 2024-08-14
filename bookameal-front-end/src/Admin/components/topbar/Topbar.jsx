// src/components/topbar/Topbar.js
import React, { useState } from "react";
import "./topbar.css";
import { NotificationsNone, AccountCircle } from "@material-ui/icons";
import { Link } from "react-router-dom";

export default function Topbar() {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
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
          <div className="topbarProfileContainer">
            <AccountCircle className="topAvatar" onClick={toggleDropdown} />
            {dropdownOpen && (
              <div className="profileDropdown">
                <Link to="/profile" className="dropdownItem">
                  Profile
                </Link>
                <Link to="/logout" className="dropdownItem">
                  LogOut
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
