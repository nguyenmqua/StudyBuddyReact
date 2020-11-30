import React, {useState} from "react";
import { Button, Form, FormGroup, Label, Input } from "reactstrap";
// import { Link } from "react-router-dom";
// import UserContext from "../../utils/UserContext";
// import API from "../../utils/API";


function ResetPass() {
//   const { userData, handleInputChange, handleLogin } = useContext(UserContext);
const [state, setState] = useState("")
  const [pass, setPass] = useState({
    pass: "",
    con: ""
  });
  const handleFormSubmit = (event) => {
      // console.log(email)
    // API.sendMail({email:email}).then(res => {
    //     console.log(res)
    // })
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
            // value={pass}
            // onChange={(event) => setPass(event.target.value)}
          />
        </FormGroup>
        <FormGroup>
          <Label for="email">Confirm new password:</Label>
          <Input
            type="text"
            name="password"
            id="password"
            placeholder="password"
            // value={pass}
            // onChange={(event) => setPass(event.target.value)}
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
