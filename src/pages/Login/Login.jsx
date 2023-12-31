import React, { useContext, useState } from "react";
import { Button, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";
import { FaGoogle, FaGithub } from "react-icons/fa";

import "./Login.css";

const Login = () => {
  const { signIn, signInWithGoogle, signInWithGithub } =
    useContext(AuthContext);

  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleLogin = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);

    signIn(email, password)
      .then((result) => {
        const loggedUser = result.user;
        console.log(loggedUser);
        event.target.reset();
        setSuccess("Log in Successfully");
        setError(""); // remove prvious error
      })
      .catch((error) => {
        setError("Invalid email or password");
      });
  };

  // experiment
  const [userinfo, setUserinfo] = useState(null);

  const handleGoogleSignIn = (event) => {
    console.log("Hello google");
    event.preventDefault();

    signInWithGoogle()
      .then((result) => {
        const user = result.user;
        console.log(user);
        setUserinfo(user);
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  const handleGithubSignIn = (event) => {
    console.log("Hello github");
    event.preventDefault();
    signInWithGithub()
      .then((result) => {
        const loggedUser = result.user;
        console.log(loggedUser);
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  return (
    <div className="login-area">
      <div className="container w-25 mx-auto login-content">
        <h2>Login Your Account</h2>
        <Form onSubmit={handleLogin}>
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
            Login
          </Button>
          <br />
          <Form.Text className="text-secondary">
            Don't have an account? <Link to="/register">Register</Link>
          </Form.Text>
          <Form.Text className="text-success"></Form.Text>
          <Form.Text className="text-danger"></Form.Text>
          <p className="text-success">{success}</p>
          <p className="text-danger">{error}</p>
        </Form>
        <div className="google-github">
          <h5>OR</h5>
          <Button onClick={handleGoogleSignIn}>
            <FaGoogle></FaGoogle> Login With Google
          </Button>
          <Button onClick={handleGithubSignIn} className="mt-3">
            <FaGithub></FaGithub> Login With Github
          </Button>
          {/* <h3>Name: {userinfo?.displayName}</h3>
          <h3>
            Image: <img src={userinfo?.photoURL} alt="" />
          </h3> */}
        </div>
      </div>
    </div>
  );
};

export default Login;
