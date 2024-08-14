import React from "react";
import "./Newsletter.css";

const Newsletter = () => {
  return (
    <div className="newsletter-container">
      <h3>Newsletter</h3>
      <h1>Subscribe To Our Newsletter</h1>
      <p>And Never Miss Latest Updates!</p>
      <form className="newsletter-form">
        <input
          type="email"
          placeholder="Enter your email address"
          required
        />
        <button type="submit">Subscribe</button>
      </form>
    </div>
  );
};

export default Newsletter;
