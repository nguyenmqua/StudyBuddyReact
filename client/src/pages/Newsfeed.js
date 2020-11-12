import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import DeleteBtn from "../components/DeleteBtn"
import API from "../utils/API"
import { Container, Row, Col, Card, Button, CardHeader, CardFooter, CardBody, CardTitle, CardText  } from 'reactstrap';
import { useAuth } from "../context/auth";

function Newsfeed(props){
    const [ID, setID] = useState("")
    const [UserName, setUserName] = useState("")
    const [Post, setPost] = useState("")
    const [AllPost, setAllPost] = useState([])
    const { setAuthTokens } = useAuth();
    // When this component mounts, grab the book with the _id of props.match.params.id
    // e.g. localhost:3000/books/599dcb67f0f16317844583fc
    const {id} = useParams()
    useEffect(() => {
      setID(id)
      loadPost()
    }, [])

    function loadPost(){
        API.newsfeed()
        .then(res => setAllPost(res.data) )
        .catch(err => console.log(err))
    }

    function deletePost(id) {
        API.deletePost(id)
          .then(res => loadPost())
          .catch(err => console.log(err));
      }

      function logOut() {
        setAuthTokens();
      }

    return(
        <Container fluid>
            <Button onClick={logOut}>Log out</Button>
            <Row>
                <Col sm="12" md={{ size: 8, offset: 2 }} >
                    {AllPost.map(post => (
                        <Card key={post._id}>
                            <CardHeader>{post.userId[0].username}
                                <Button className="float-right" close onClick={() => deletePost(post._id)} />
                            </CardHeader>   
                            <CardBody>
                                <CardTitle>{post.post}</CardTitle>
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
            </Row>
        </Container>
    )
}

export default Newsfeed;