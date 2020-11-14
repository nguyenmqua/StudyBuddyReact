import React, { useEffect, useContext, useReducer } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import API from "../utils/API"
import { Container, Row, Col, Card, Button, CardHeader, CardFooter, CardBody, CardTitle, CardText  } from 'reactstrap';
import UserContext, {user} from "../utils/UserContext"
import { use } from "passport";
function Message(props){
    const {user} = useContext(UserContext)
  
    // When this component mounts, grab the book with the _id of props.match.params.id
    // e.g. localhost:3000/books/599dcb67f0f16317844583fc
    const {id} = useParams()
    useEffect(() => {
      loadPost()
    }, [])

    function loadPost(){
        API.getPost(id)
        .then(res => console.log(res.data))
        .catch(err => console.log(err))
    }


    return(
        <Container fluid>
            <Row>
                {/* <Col sm="12" md={{ size: 8, offset: 2 }} >
                    {AllPost.map(post => (
                        <Card key={post._id}>
                            <CardHeader>{post.userId[0].username}  {post.subject}
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
                </Col> */}
            </Row>
        </Container>
    )
}

export default Message;