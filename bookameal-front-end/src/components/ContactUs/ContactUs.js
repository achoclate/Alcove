// // src/components/ContactUs/ContactUs.jsx

// import React from "react";
// import ContactUsForm from "./ContactUsForm";
// import "./ContactUs.css";

// const ContactUs = () => {
//   return (
//     <div className="contact-us">
//       <div className="contact-image">
//         <img
//           src={`${process.env.PUBLIC_URL}/images/contact.jpg`}
//           alt="Contact Us"
//         />
//       </div>
//       <div className="contact-form">
//         <h2>Contact Us</h2>
//         <ContactUsForm />
//       </div>
//     </div>
//   );
// };

// export default ContactUs;
// src/components/ContactUs/ContactUs.jsx

import React, { useState } from "react";
import "./ContactUs.css";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission, e.g., send data to backend or display a success message
    console.log("Form submitted:", formData);
    // Reset form
    setFormData({
      name: "",
      email: "",
      message: "",
    });
  };

  return (
    <div className="contact-us">
      <div className="contact-us-content">
        <h2>Contact Us</h2>
        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
            ></textarea>
          </div>
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default ContactUs;
