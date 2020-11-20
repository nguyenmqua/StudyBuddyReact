import React, { useEffect, useState, useContext } from "react";
import { Link } from "react-router-dom";
import API from "../utils/API";
import {
  Container,
  Row,
  Col,
  Card,
  Button,
  CardHeader,
  CardFooter,
  CardBody,
  CardTitle,
  CardText,
} from "reactstrap";
import UserContext from "../utils/UserContext";
import MotiveQuote from "../components/MotiveQuote";
import "./Auth/style.css";

function Newsfeed(props) {
  const { loggedIn } = useContext(UserContext);
  const [AllPost, setAllPost] = useState([]);

  useEffect(() => {
    loadPost();
  }, []);

  function loadPost() {
    API.newsfeed()
      .then((res) => setAllPost(res.data))
      .catch((err) => console.log(err));
  }

  function deletePost(id) {
    API.deletePost(id)
      .then((res) => loadPost())
      .catch((err) => console.log(err));
  }

  return (
    <Container fluid>
      <Row>
        {!loggedIn ? (
          <Col sm="12" md={{ size: 8, offset: 2 }}>
            <h2>Welcome to Study Buddy!</h2>
            <p style={{ fontSize: "1.25em" }}>
              Study Buddy is designed to help you connect with fellow students
              or like minded folks who would like to study the same subject
              together. Login, Choose a Subject, Choose to Connect Virtually or
              in Person and Choose how many people you'd like to study with. You
              can see who's studying the same subject and connect with them.
            </p>
          </Col>
        ) : (
          ""
        )}
      </Row>
      <Row>
        {loggedIn ? (
          <Col sm="12" md={{ size: 8, offset: 2 }}>
            <MotiveQuote />
            <h1>Study Buddy Requests</h1>
            {AllPost.map((post) => (
              <Card key={post._id}>
                <CardHeader>
                  {" "}
                  "User:" {post.userId.username} "Subject": {post.subject}
                  <Button
                    className="float-right"
                    close
                    onClick={() => deletePost(post._id)}
                  />
                </CardHeader>
                <CardBody>
                  <CardTitle>
                    Notes:
                    <CardText>{post.notes}</CardText>
                  </CardTitle>
                  <CardTitle>
                    Group Size
                    <CardText>{post.group}</CardText>
                  </CardTitle>
                  <CardTitle>Location</CardTitle>
                  <CardText>{post.location}</CardText>
                </CardBody>
                <CardFooter>
                  {post.date}
                  <Button className="float-right">
                    <Link to={"/post/" + post._id}>
                      <strong>Lets Link Up!</strong>
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </Col>
        ) : (
          <div id="loginSection">
            <h4> Log in to view this page </h4>
            <Link to="/login">
              <Button> Login </Button>
            </Link>
          </div>
        )}
      </Row>
    </Container>
  );
}

export default Newsfeed;
