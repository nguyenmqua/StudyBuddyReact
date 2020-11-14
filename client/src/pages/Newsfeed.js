import React, { useEffect, useState, useContext } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import API from "../utils/API"
import { Container, Row, Col, Card, Button, CardHeader, CardFooter, CardBody, CardTitle, CardText  } from 'reactstrap';
import UserContext from '../utils/UserContext';

function Newsfeed(props){
    const { user,  loggedIn } = useContext(UserContext);
    const [AllPost, setAllPost] = useState([])
  
  
    // When this component mounts, grab the book with the _id of props.match.params.id
    // e.g. localhost:3000/books/599dcb67f0f16317844583fc
    useEffect(() => {

      loadPost()
    }, [])

    function loadPost(){
        API.newsfeed()
        .then(res => setAllPost(res.data))
        .catch(err => console.log(err))
    }

    function deletePost(id) {
        API.deletePost(id)
          .then(res => loadPost())
          .catch(err => console.log(err));
      }

    return(
        <Container fluid>
            <Row>
            {/* {loggedIn ? ( */}
                <Col sm="12" md={{ size: 8, offset: 2 }} >
                    <h1>newsfeed</h1>
                    {AllPost.map(post => (
                        <Card key={post._id}>
                            <CardHeader> "User:" {post.userId[0].username}    "Subject": {post.subject}
                                <Button className="float-right" close onClick={() => deletePost(post._id)} />
                            </CardHeader>   
                            <CardBody>
                                <CardTitle>Notes:
                                    <CardText>{post.notes}</CardText>
                                </CardTitle>
                                <CardTitle>Group Size
                                    <CardText>{post.group}</CardText>
                                </CardTitle>
                                <CardTitle>Location</CardTitle>
                                <CardText>{post.location}</CardText>
                            </CardBody>
                            <CardFooter>
                                {post.date}
                                <Button className="float-right">
                                <Link to={"/post/" + post._id}>
                                    <strong>
                                        Lets Link Up!
                                    </strong>
                                </Link>
                                </Button>
                            </CardFooter>                            
                        </Card>
                    ))}
                </Col>
                 {/* ) : (
                    <div>
                      <h1> Log in to view this page </h1>
                      <Link to="/login">
                        <Button> Login </Button>
                      </Link>
                    </div>
                  )} */}
            </Row>
        </Container>
    )
}

export default Newsfeed;