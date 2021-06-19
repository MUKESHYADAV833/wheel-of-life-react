import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function MyVerticallyCenteredModal(props) {
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
        <input type="tel" id="phone" name="phone" placeholder="abc@gmail.com" />
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Done</Button>
      </Modal.Footer>
    </Modal>
  );
}