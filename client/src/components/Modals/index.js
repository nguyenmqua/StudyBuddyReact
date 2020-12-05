import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter,Label,Input,FormGroup } from 'reactstrap';

const ModalExample = (props) => {
    const [modal, setModal] = useState(false);
    const toggleModal = () => setModal(!modal);



  return (
    <div>
      <Button color="danger" onClick={toggleModal}>Edit Contact</Button>
      <Modal isOpen={modal} toggle={toggleModal}>
        <ModalHeader toggle={toggleModal}>Modal title</ModalHeader>
        <ModalBody>
        <FormGroup>
        <Label for="exampleSelect">Update Social Media Contact</Label>
        <Input type="select" name="select" id="exampleSelect" >
          <option>1</option>
          <option>2</option>
          <option>3</option>
          <option>4</option>
          <option>5</option>
        </Input>
      </FormGroup>

        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={toggleModal}>Submit</Button>{' '}
          <Button color="secondary" onClick={toggleModal}>Cancel</Button>
        </ModalFooter>
      </Modal>
    </div>
  );
}

export default ModalExample;