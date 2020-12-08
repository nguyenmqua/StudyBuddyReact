import React, { useState, useContext } from 'react';
import { NavLink, Button, Modal, ModalHeader, ModalBody, ModalFooter,Label,Input,FormGroup, InputGroup,InputGroupAddon,InputGroupText } from 'reactstrap';
import API from "../../utils/API"
import UserContext from "../../utils/UserContext"
const ModalExample = (props) => {
    const [modal, setModal] = useState(false);
    const [option, setOption] = useState("");
    const [username, setUsername] = useState("")
    const {user} = useContext()

    const toggleModal = () => setModal(!modal);

    const handleSubmit = () =>{
      API.putUsername({username:username, option: option, userId:user._id})
      .then(res=>console.log(res.data))
    }


  return (
    <div>
          <NavLink color="danger" onClick={toggleModal} >Edit</NavLink>
          <Modal isOpen={modal} toggle={toggleModal}>
        <ModalHeader toggle={toggleModal}>Modal title</ModalHeader>
        <ModalBody>
        <FormGroup>
        <Label for="exampleSelect">Update Social Media Contact</Label>
        <InputGroup>
      </InputGroup>
        <Input type="select" name="select" id="exampleSelect" onChange={(e) => setOption(e.target.value)}>
          <option>Instagram</option>
          <option>Twitter</option>
          <option>LinkedIn</option>
          <option>Github</option>
        </Input>
        <InputGroupAddon addonType="prepend">
          <InputGroupText>{option}'s Username</InputGroupText>
        </InputGroupAddon>
        <Input onChange={(e)=> setUsername(e.target.value)} placeholder="username" />

      </FormGroup>
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={handleSubmit}>Submit</Button>{' '}
          <Button color="secondary" onClick={toggleModal}>Cancel</Button>
        </ModalFooter>
      </Modal>
    </div>
  );
}

export default ModalExample;