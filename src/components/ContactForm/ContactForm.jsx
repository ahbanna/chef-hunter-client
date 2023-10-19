import React, { useState } from "react";
import "./ContactForm.css";
import Swal from "sweetalert2";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you can handle the form submission, for example, sending the form data to an API or performing other actions.
    console.log("Form submitted:", formData);
    // Reset the form fields after submission
    setFormData({
      name: "",
      email: "",
      message: "",
    });

    Swal.fire({
      icon: "success",
      title: "Success!",
      text: "Message sent successfully!",
    });
  };

  return (
    <form onSubmit={handleSubmit} className="contact-form-area">
      <div className="name-email-field">
        <div className="single-input-wrap">
          {/* <label htmlFor="name">Name:</label> */}
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div className="single-input-wrap">
          {/* <label htmlFor="email">Email:</label> */}
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
      </div>
      <div className="single-textarea-wrap">
        {/* <label htmlFor="message">Message:</label> */}
        <textarea
          id="message"
          name="message"
          placeholder="Messsage"
          value={formData.message}
          onChange={handleChange}
          required
        />
      </div>
      <div className="submit-btn">
        <button type="submit">Submit</button>
      </div>
    </form>
  );
};

export default ContactForm;
