import React, { useState } from "react";
import API from "../utils/API"
import { Link } from "react-router-dom";
import { Container, Row, Col, Input, Button } from 'reactstrap';

function Login() {
  const [loginUsername, setloginUsername] = useState("");
  const [loginPassword, setloginPassword] = useState("");
  
  const loginButton = async () => {
    try {
        const res =  await API.login({
          username: loginUsername,
          password: loginPassword,
        })
          if (!res.data._id ){
            alert("Invalid Email or Password")
          } else {
          window.location.href = "/member/"+res.data._id;
          }
    } catch (error) {
      console.log(
        "There was an error processing your results, please try again",
        error
      );
    }
  };

  return (
    <Container>
      <Row>
        <Col sm="12" md={{ size: 6, offset: 3 }}>
          <div className="App">
            <div>
              <h1>Login</h1>
              <Input
                placeholder="username"
                onChange={(e) => setloginUsername(e.target.value)}
              />
              <Input
                placeholder="password"
                onChange={(e) => setloginPassword(e.target.value)}
              />
              <Button onClick={loginButton}>Login</Button>{' '}
              <Link to={"/signup"}><Button className="float-right">Signup</Button></Link>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default Login;
