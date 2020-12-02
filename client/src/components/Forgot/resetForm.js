import React, {useState, useContext} from "react";
import { Button, Form, FormGroup, Label, Input } from "reactstrap";
// import { Link } from "react-router-dom";
import UserContext from "../../utils/UserContext";
// import API from "../../utils/API";


function ResetPass() {
//   const { userData, handleInputChange, handleLogin } = useContext(UserContext);
// const [state, setState] = useState("")
//   const [pass, setPass] = useState({
//     pass: "",
//     con: ""
//   });

  const {
    userData,
    handleInputChange,
  } = useContext(UserContext);
  const [validPassword, setValidPassword] = useState(false);
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState({});
  const [isConfirmed, setIsConfirmed] = useState(false);
  

  const handleConfirmPassword = (event) => {
    const { value } = event.target;
    setConfirmPassword(value);
  };
  

  // checks is password meets regex test (at least 8 letters, 1 capital and 1 number)
  const checkPassword = () => {
    const strongPassword = new RegExp(
      /(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{8,})/
    );
    const valid = strongPassword.test(userData.password);
    const length = userData.password.length;
    if (length === 0) {
      setValidPassword(false);
      setErrorMessage({ ...errorMessage, password: "" });
    } else if (!valid) {
      setValidPassword(false);
      setErrorMessage({
        ...errorMessage,
        password: "Password should be at least 8 letters, 1 capital & 1 number",
      });
    } else {
      setValidPassword(true);
      setErrorMessage({ ...errorMessage, password: "" });
    }
  };

    // checks if 2 password fields match
    const checkConfirmPassword = () => {
    
      if (confirmPassword.length === 0) {
        setIsConfirmed(false);
        setErrorMessage({ ...errorMessage, confirmPassword: "" });
      } else if (
        userData.password !== "" &&
        userData.password === confirmPassword
      ) {
        setIsConfirmed(true);
        setErrorMessage({ ...errorMessage, confirmPassword: "" });
      } else {
        setIsConfirmed(false);
        setErrorMessage({
          ...errorMessage,
          confirmPassword: "Passwords must match",
        });
      }
    }
  return (
    <div>
      <h2 className="resetTitle">Reset Password</h2>
      <hr />
      <Form>
        <FormGroup>
          <Label for="email">New password:</Label>
          <Input
            type="text"
            name="password"
            id="password"
            placeholder="password"
            value={userData.password}
            onChange={handleInputChange}
            onBlur={checkPassword}
            valid={validPassword}
          />
        </FormGroup>
        <FormGroup>
          <Label for="email">Confirm new password:</Label>
          <Input
            type="text"
            name="password"
            id="password"
            placeholder="password"
            value={confirmPassword}
            onChange={handleConfirmPassword}
            onKeyUp={checkConfirmPassword}
            valid={isConfirmed}
          />
        </FormGroup>
        <Button color="primary" block>
          Confirm New Password
        </Button>
      </Form>
    </div>
  );
  };
export default ResetPass;
