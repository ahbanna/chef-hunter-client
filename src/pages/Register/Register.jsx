import React, { useContext, useState } from "react";
import { Button, Form, Spinner } from "react-bootstrap";
import { Link } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";
import "./Register.css";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

const Register = () => {
  const { createUser, loading } = useContext(AuthContext);

  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  //laoding
  // if (loading) {
  //   return <Spinner animation="border" variant="primary" />;
  // }

  const handleRegister = (event) => {
    event.preventDefault();

    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const photo = form.photo.value;
    const password = form.password.value;

    console.log(name, email, password, photo);

    setError("");
    if (password.length < 6) {
      setError("Password should be at least 6 character");
      return;
    }

    createUser(email, password)
      .then((result) => {
        const createdUser = result.user;
        console.log(createdUser);
        event.target.reset(); //
        setSuccess("User has been created successfully");
      })
      .catch((error) => {
        setError(error.toString());
      });
  };
  return (
    <div className="register-area">
      <Header></Header>
      <div className="container w-25 mx-auto register-content">
        <h2>Register Your Account</h2>
        <Form onSubmit={handleRegister}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Name</Form.Label>
            <Form.Control
              type="text"
              name="name"
              placeholder="Your Name"
              required
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Photo URL</Form.Label>
            <Form.Control
              type="text"
              name="photo"
              placeholder="Photo URL"
              required
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="email"
              name="email"
              placeholder="Enter email"
              required
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              name="password"
              placeholder="Password"
              required
            />
          </Form.Group>
          <Button variant="primary" type="submit">
            Register
          </Button>
          <br />
          <Form.Text className="text-secondary">
            Already have an account? <Link to="/login">Login</Link>
          </Form.Text>
          <Form.Text className="text-success"></Form.Text>
          <Form.Text className="text-danger"></Form.Text>
          <p className="text-danger">{error}</p>
          <p className="text-success">{success}</p>
        </Form>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Register;
