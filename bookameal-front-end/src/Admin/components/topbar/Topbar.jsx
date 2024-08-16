import React, { useState, useEffect } from "react";
import "./topbar.css";
import { NotificationsNone, Settings, AccountCircle } from "@mui/icons-material";
import { Link, useNavigate } from "react-router-dom";

export default function Topbar({ setAuthenticated }) {
  const [profileDropdownOpen, setProfileDropdownOpen] = useState(false);
  const [messagesDropdownOpen, setMessagesDropdownOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [messageCount, setMessageCount] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    // Fetch contact messages from the backend when the component mounts
    fetchMessages();
  }, []);

  const fetchMessages = async () => {
    try {
      const response = await fetch("http://localhost:5000/contact_messages");
      const data = await response.json();
      setMessages(data);
      setMessageCount(data.length);
    } catch (error) {
      console.error("Error fetching messages:", error);
    }
  };

  const toggleProfileDropdown = () => {
    setProfileDropdownOpen(!profileDropdownOpen);
    setMessagesDropdownOpen(false); // Close messages dropdown if open
  };

  const toggleMessagesDropdown = () => {
    setMessagesDropdownOpen(!messagesDropdownOpen);
    setProfileDropdownOpen(false); // Close profile dropdown if open

    // Fetch messages again if dropdown is opened
    if (!messagesDropdownOpen) {
      fetchMessages();
    }
  };

  const handleLogout = () => {
    fetch("http://localhost:5000/logout", {
      method: "POST",
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data.message);
        localStorage.removeItem("authToken");
        if (typeof setAuthenticated === 'function') {
          setAuthenticated(false);
        } else {
          console.error('setAuthenticated is not a function');
        }
        navigate("/login");
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
          <div className="topbarIconContainer" onClick={toggleMessagesDropdown}>
            <NotificationsNone />
            <span className="topIconBadge">{messageCount}</span>
            {messagesDropdownOpen && (
              <div className="messagesDropdown">
                {messages.length > 0 ? (
                  messages.map((msg) => (
                    <div key={msg.id} className="dropdownMessage">
                      <strong>{msg.name}</strong> ({msg.email}): {msg.message}
                    </div>
                  ))
                ) : (
                  <div>No messages</div>
                )}
              </div>
            )}
          </div>
          <div className="topbarIconContainer">
            <Settings />
          </div>
          <div className="topbarProfileContainer">
            <AccountCircle className="topAvatar" onClick={toggleProfileDropdown} />
            {profileDropdownOpen && (
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
