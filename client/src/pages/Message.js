import React, { useEffect, useContext, useState } from "react";
import { useParams } from "react-router-dom";
import API from "../utils/API";
import {
  Container,
  Row,
  Col,
  Card,
  Button,
  CardHeader,
  Input,
  CardFooter,
  CardBody,
  CardTitle,
  CardText,
  CardGroup,
} from "reactstrap";

import UserContext, { user } from "../utils/userContext";

import moment from "moment"

function Message(props) {
  const { user } = useContext(UserContext);
  const [CurrentPost, setCurrentPost] = useState({});
  const [CurrentPostAuthor, setCurrentPostAuthor] = useState("");
  const [Comment, setComment] = useState("");
  const [DisplayComments, setDisplayComments] = useState([]);
  // When this component mounts, grab the book with the _id of props.match.params.id
  // e.g. localhost:3000/books/599dcb67f0f16317844583fc
  const { id } = useParams();
  useEffect(() => {
    loadPost();
    loadComments()
  }, []);

  function loadComments() {
    API.getComments(id)
      .then((res) => {
        // setCurrentPost(res.data);
        // setCurrentPostAuthor(res.data.userId.username);
        setDisplayComments(res.data);
        console.log(res.data);
      })
      .catch((err) => console.log(err));
  }

  function loadPost() {
    API.getPost(id)
      .then((res) => {
        setCurrentPost(res.data);
        setCurrentPostAuthor(res.data.userId.username);
      })
      .then(() => console.log(CurrentPostAuthor))
      .catch((err) => console.log(err));
  }

  function deletePost(id) {
    API.deletePost(id)
      .then((res) => loadPost())
      .catch((err) => console.log(err));
  }

  const handleUserBtnClick = async (e) => {
    try {
      const res = await API.postComment({
        comment: Comment,
        userId: user._id,
        postId: id,
      });
      console.log(res);
      window.location.href = "/post/" + id;
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
        <Col sm="12" md={{ size: 12 }}>
          <Card key={CurrentPost._id}>
            <CardHeader>
               {CurrentPostAuthor}
            </CardHeader>
            <CardHeader>
               Subject: {CurrentPost.subject}
            </CardHeader>
            <CardBody>
              <CardTitle>
                Notes:{CurrentPost.notes}
              </CardTitle>
              <CardTitle>
                Group Size: {CurrentPost.group}
              </CardTitle>
              <CardTitle>Location</CardTitle>
              <CardText>{CurrentPost.location}</CardText>
            </CardBody>
            <CardFooter>{moment(CurrentPost.date).format('MMMM Do YYYY, h:mm:ss a')} ago</CardFooter>
          </Card>
        </Col>
      </Row>
    
          {DisplayComments.map((comment) => (
            <Row key={comment._id}>
              <Col sm="12" md={{ size: 12 }}>
                {CurrentPostAuthor === comment.userId.username ? (
            <CardGroup className="float-right" >

            <Card className="bg-info clearfix">
              <CardBody className="float-right" >
                <b>{comment.userId.username}</b>: {comment.comment}
              </CardBody>
              <CardFooter>{moment(comment.date).format('MMMM Do YYYY, h:mm:ss a')}</CardFooter>
            </Card>
            </CardGroup>
              ) : (
                <CardGroup className="float-left"  key={comment._id}>
                <Card className ="float-left" >
                <CardBody >
                  <b>{comment.userId.username}</b>: {comment.comment}
                </CardBody>
                <CardFooter> {moment(comment.date).format('MMMM Do YYYY, h:mm:ss a')}</CardFooter>
              </Card>
                </CardGroup>
                )}  
        
          </Col>
      </Row>
          ))}
        
      <Row>
        <Col sm="12" md={{ size: 8, offset: 2 }}>
          <Card>
            <CardHeader>Reply</CardHeader>
            <CardBody>
              <Input
                type="text"
                onChange={(e) => setComment(e.target.value)}
              ></Input>
            </CardBody>
            <Button onClick={handleUserBtnClick}>Submit</Button>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default Message;
