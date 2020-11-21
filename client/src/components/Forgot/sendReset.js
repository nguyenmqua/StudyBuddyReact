import React, { useContext } from "react";
import { Button, Form, FormGroup, Label, Input } from "reactstrap";
import { Link } from "react-router-dom";
import UserContext from "../../utils/UserContext";
import "./style.css";

const SendReset = () => {
  const { userData, handleInputChange, handleLogin } = useContext(UserContext);
  return (
    <div>
      <h2 className="resetTitle">Reset Password</h2>
      <hr />
      <Form>
        <FormGroup>
          <Label for="email">Email Adress:</Label>
          <Input
            type="text"
            name="email"
            id="email"
            placeholder="email"
            value={userData.email}
            onChange={handleInputChange}
          />
        </FormGroup>
        <Button onClick={handleLogin} color="primary" block>
          Send Reset Email
        </Button>
        <p className="signupLink">
          <Link to="/signup">Don't have an account? Sign up here</Link>
        </p>
      </Form>
    </div>
  );
};

export default SendReset;
