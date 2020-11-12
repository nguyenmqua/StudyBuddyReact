import React, { useState } from "react";
import API from "../utils/API"
import { Link, Redirect } from "react-router-dom";
import { Container, Row, Col, Input, Button } from 'reactstrap';
import { useAuth } from "../context/auth";

function Login(props) {
  const [loginUsername, setloginUsername] = useState("");
  const [loginPassword, setloginPassword] = useState("");
  const [isLoggedIn, setLoggedIn] = useState(false);
  const [isError, setIsError] = useState(false);
  const { setAuthTokens } = useAuth();
 

  if (isLoggedIn) {
    return <Redirect to= "/newsfeed" />;
  }

  const loginButton = async () => {
      API.login({
          username: loginUsername,
          password: loginPassword,
        })
        .then(result => {
          if (result.status === 200) {
            console.log(result.data)
            setAuthTokens(result.data);
            setLoggedIn(true);
          } else {
            setIsError(true);
          }
        })
        .catch(e => {
          setIsError(true);
        });
    };

    if (isLoggedIn) {
      return <Redirect to="/newsfeed" />;
    }

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
              <Button onClick={loginButton}>Login</Button>
              <Link to={"/signup"}><Button className="float-right">Signup</Button></Link>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default Login;
