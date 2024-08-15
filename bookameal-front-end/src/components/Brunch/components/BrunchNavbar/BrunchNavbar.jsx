import React, { useState } from "react";
import Logo from "../../assets/logo.png";
import { FaBars, FaTimes, FaSearch, FaMoon, FaSun } from "react-icons/fa";
import "./BrunchNavbar.css";

const BrunchNavbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("#");
  const [darkMode, setDarkMode] = useState(false);

  const handleMenuClick = (link) => {
    setActiveLink(link);
    setIsMobileMenuOpen(false);
    const section = document.querySelector(link);
    section?.scrollIntoView({ behavior: "smooth" });
  };

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.body.classList.toggle("dark-mode");
  };

  return (
    <div className={`custom-navbar ${darkMode ? "dark" : ""}`}>
      <div className="custom-navbar-container">
        <div className="custom-navbar-content">
          <div className="custom-navbar-left">
            <a href="#" className="custom-logo-link">
              <img src={Logo} alt="Logo" className="custom-logo-img" />
              Brunch
            </a>
          </div>
          <div className="custom-navbar-center">
            <ul
              className={`custom-menu ${isMobileMenuOpen ? "mobile-open" : ""}`}
            >
              <li>
                <a
                  href="#home"
                  className={`custom-menu-link ${
                    activeLink === "#home" ? "active" : ""
                  }`}
                  onClick={() => handleMenuClick("#home")}
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#menu"
                  className={`custom-menu-link ${
                    activeLink === "#menu" ? "active" : ""
                  }`}
                  onClick={() => handleMenuClick("#menu")}
                >
                  Menu
                </a>
              </li>
              <li>
                <a
                  href="#aboutus"
                  className={`custom-menu-link ${
                    activeLink === "#aboutus" ? "active" : ""
                  }`}
                  onClick={() => handleMenuClick("#aboutus")}
                >
                  About Us
                </a>
              </li>
            </ul>
          </div>
          <div className="custom-navbar-right">
            <div className="custom-search-container">
              <input
                type="text"
                placeholder="Search..."
                className="custom-search-input"
              />
              <button className="custom-search-button">
                <FaSearch />
              </button>
            </div>
            <div className="custom-theme-toggle" onClick={toggleDarkMode}>
              {darkMode ? <FaSun /> : <FaMoon />}
            </div>
            <button className="custom-order-button">Order</button>
            <button
              className="custom-mobile-menu-toggle"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
            </button>
          </div>
        </div>
        {isMobileMenuOpen && (
          <ul className="custom-mobile-menu">
            <li>
              <a
                href="#home"
                className={`custom-menu-link ${
                  activeLink === "#home" ? "active" : ""
                }`}
                onClick={() => handleMenuClick("#home")}
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#menu"
                className={`custom-menu-link ${
                  activeLink === "#menu" ? "active" : ""
                }`}
                onClick={() => handleMenuClick("#menu")}
              >
                Menu
              </a>
            </li>
            <li>
              <a
                href="#aboutus"
                className={`custom-menu-link ${
                  activeLink === "#aboutus" ? "active" : ""
                }`}
                onClick={() => handleMenuClick("#aboutus")}
              >
                About Us
              </a>
            </li>
          </ul>
        )}
      </div>
    </div>
  );
};

export default BrunchNavbar;
