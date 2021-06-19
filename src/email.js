import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function MyVerticallyCenteredModal(props) {
  let handleOnChange = ( email ) => {

    // don't remember from where i copied this code, but this works.
    let re = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

    if ( re.test(email) ) {
        // this is a valid email address
        // call setState({email: email}) to update the email
        // or update the data in redux store.
        alert("successful")
    }
    else {
        // invalid email, maybe show an error to the user.
        alert("haii")
    }

}
  return (

    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Send Email
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p>Give your mail below so that we can send you a copy of your WHEEL OF LIFE</p>
        <input type="email"id="phone"  placeholder="abc@gmail.com"/>

      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide, handleOnChange}>Done</Button>
      </Modal.Footer>
    </Modal>
  );
}