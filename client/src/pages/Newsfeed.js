import React, { useEffect, useState, useContext } from "react";
import { Link } from "react-router-dom";
import API from "../utils/API";
import moment from "moment";
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
  CardImg,
} from "reactstrap";
import UserContext from "../utils/UserContext";
import MotiveQuote from "../components/MotiveQuote";
import "./Auth/style.css";
import Search from "../components/Search";

function Newsfeed(props) {
  const { loggedIn } = useContext(UserContext);
  const [AllPost, setAllPost] = useState([]);
  const [search, setSearch] = useState("");
  useEffect(() => {
    loadPost();
  }, []);

  function loadPost() {
    API.newsfeed()
      .then((res) => {
        console.log(res.data)
        setAllPost(res.data)})
      .catch((err) => console.log(err));
  }

  function deletePost(id) {
    API.deletePost(id)
      .then((res) => loadPost())
      .catch((err) => console.log(err));
  }

  const submitSearch = () => {
    API.getSearch(search)
      .then((res) => {
        setAllPost(res.data);
      })
      .catch((err) => console.log(err));
  };

  return (
    <Container>
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
          <Col sm="12" md={{ size: 5, offset: 2 }}>
            <MotiveQuote />
            {AllPost.map((post) => (
              <Card key={post._id}>
                <CardHeader className="header-background">
                  <CardImg
                    className="card-image"
                    variant="top"
                    src="../img/background.jpg"
                  />
                  {/* <img src = {post.userId.Image} width="50px"></img> */}
                </CardHeader>

                <CardBody>
                  <CardTitle>
                    <CardText className="card-text">
                      <h2>{post.userId.username}</h2>
                    </CardText>
                  </CardTitle>
                  <CardTitle>
                    <CardText className="card-text">
                      <p>{post.notes}</p>
                    </CardText>
                  </CardTitle>

                  <Button className="Connect-Button">
                    <Link to={"/post/" + post._id}>
                      <strong>Lets Link Up!</strong>
                    </Link>
                  </Button>

                  <div className="card-stats">
                    <div className="stat-border">
                      <div className="value">Buddies:</div>
                      <div className="type">{post.group}</div>
                    </div>
                    <div className="stat-border">
                      <div className="value">Subject:</div>
                      <div className="type">{post.subject}</div>
                    </div>
                    <div className="stat-border">
                      <div className="value">Location:</div>
                      <div className="type">{post.location}</div>
                    </div>
                  </div>
                </CardBody>
                <CardFooter className ="footer-background">
                  {moment(post.date).format('MMMM Do YYYY, h:mm:ss a')}
                  <Button
                    className="float-right"
                    close
                    onClick={() => deletePost(post._id)}
                  />
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
