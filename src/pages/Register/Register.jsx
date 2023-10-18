import React, { createContext, useContext, useState } from "react";
import { Button, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";
import "./Register.css";
import Footer from "../Footer/Footer";
import { updateProfile } from "firebase/auth";
import Header from "../Shared/Header/Header";

// experiment
export const updateContext = createContext();
//
const Register = ({ children }) => {
  const { createUser } = useContext(AuthContext);

  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  // experiment
  const [displayName, setDisplayName] = useState("");
  const [photoURL, setPhotoURL] = useState("");

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
      setError("Password should be at least 6 characters");
      return;
    }

    createUser(email, password)
      .then((result) => {
        const createdUser = result.user;
        console.log(createdUser);
        setDisplayName(name); // update state with entered name
        setPhotoURL(photo); // update state with entered photo URL
        event.target.reset();
        setSuccess("User has been created successfully");
        updateUserData(createdUser, name, photo);
      })
      .catch((error) => {
        setError(error.toString());
      });
  };

  const updateUserData = (user, name, photo) => {
    updateProfile(user, {
      displayName: name,
      photoURL: photo,
    })
      .then(() => {
        console.log(updateProfile);
      })
      .catch((error) => {
        setError(error.message);
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
          <p className="text-danger">{error}</p>
          <p className="text-success">{success}</p>
        </Form>
        {/* experiment */}

        <updateContext.Provider value={updateProfile}>
          <div>
            {/* <p className="name">{displayName}</p> */}
            <p className="photo">
              <img src={photoURL} />
            </p>
          </div>
        </updateContext.Provider>
      </div>
      <Footer />
    </div>
  );
};

export default Register;
