import React, { useState } from "react";
import Swal from "sweetalert2";
import "./Newsletter.css";

const Newsletter = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here (e.g., send data to a server)
    console.log("Email submitted:", email);

    // Clear the input field after submission
    setEmail("");

    // Show a success message using SweetAlert2
    Swal.fire({
      title: "Subscription Successful!",
      text: "Thank you for subscribing to our newsletter.",
      icon: "success",
      confirmButtonColor: "#007bff",
    });
  };
  return (
    <div>
      <div className="newsletter-form">
        <form onSubmit={handleSubmit}>
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <button type="submit">Subscribe</button>
        </form>
      </div>
    </div>
  );
};

export default Newsletter;
