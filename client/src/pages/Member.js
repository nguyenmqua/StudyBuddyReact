import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import API from "../utils/API"
import { Container, Row, Col, Input, Button } from 'reactstrap';

function Member(props) {
  const [ID, setID] = useState("")
  const [Post, setPost] = useState("")
  const [Username, setUsername] = useState("")


  // When this component mounts, grab the book with the _id of props.match.params.id
  // e.g. localhost:3000/books/599dcb67f0f16317844583fc
  const {id} = useParams()
  useEffect(() => {
    console.log(id)
    setID(id)
    API.getUserData(id)
      .then(res => setUsername(res.data.username))
      .catch(err => console.log(err));
  }, [])

  const handleUserBtnClick = async (e) => {
    try {
      const res = await API.postPost({
        userId: ID,
        post: Post
      })
      console.log(res)
      window.location.href = "/newsfeed"
    } catch (error) {
      console.log(
        "There was an error processing your results, please try again",
        error
      );
    }
  }

  return (
      <Container fluid>
        <Row>
          <Col sm="12" md={{ size: 8, offset: 2 }}>
            <p>Hello {Username}</p>
            <h3>Looking for Study Buddy?</h3>
            <Input onChange={(e)=> setPost(e.target.value)}/>
            <Button onClick ={handleUserBtnClick}>Submit Post</Button>
          </Col>
        </Row>
      </Container>
    );
  }


export default Member;
