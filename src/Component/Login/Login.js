import React from "react";
import { Form } from "react-bootstrap";
import useAuth from "../../Hooks/useAuth";
import { useHistory, useLocation } from "react-router-dom";

import "./login.css";

const Login = () => {
  const { signinWithGoogle, setUser, setError } = useAuth();
  const history = useHistory();
  const location = useLocation();
  const url = location.state?.from || "/home";

  const handleGoogleLogin = () => {
    signinWithGoogle()
      .then((result) => {
        const user = result.user;

        setUser(user);
        history.push(url);
      })
      .catch((err) => {
        setError(err.message);
      });
  };
  return (
    <div>
      <div className="w-25  mx-auto my-5 login">
        <Form>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <h1>Please Login</h1>
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" />
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" />
          </Form.Group>

          <input className="btn btn-primary" type="submit" value="Login" />
        </Form>
        <div className="w-25 mx-auto">
          <button onClick={handleGoogleLogin}>
            <img
              className="img fluid google-icon"
              src={"https://i.ibb.co/YTwDKpH/google-llc.png"}
              alt=""
            />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
