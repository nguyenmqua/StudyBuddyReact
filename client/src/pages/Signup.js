import React, { useState } from "react";
import API from "../utils/API"
import { Link } from "react-router-dom";
import { Container, Row, Col, Input, Button } from 'reactstrap';

function Register() {
  const [registerUsername, setRegisterUsername] = useState("");
  const [registerPassword, setRegisterPassword] = useState("");
  
  const register = async () => {
    try {
      const res =  await API.register({
        username: registerUsername,
        password: registerPassword,
      })
        if (!res.data._id ){
          console.log(res)
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
        <h1>Register</h1>
        <Input
          placeholder="username"
          onChange={(e) => setRegisterUsername(e.target.value)}
        />
        <Input
          placeholder="password"
          onChange={(e) => setRegisterPassword(e.target.value)}
        />
        <Button onClick={register}>Register</Button>
        <Link to={"/login"}><Button className="float-right">Login</Button></Link>
        </Col>
      </Row>
    </Container>
  );
}

export default Register;
