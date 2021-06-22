import React, { Component } from "react";
import { Modal, Button } from "react-bootstrap";


class Email extends Component {
    constructor(props) {
        super(props)
        this.state = {
            isOpen: false
        }
    };

    closeModal = () => this.setState({ isOpen: false });

    render() {
        return (
            <>
                <div
                    className="d-flex align-items-center justify-content-center"
                    style={{ height: "100vh" }}
                >
                    {/* <Button variant="primary" onClick={this.props.openModal}>
                    </Button> */}
                </div>
                <div className="modal">

                    <Modal show={this.state.isOpen} onHide={this.closeModal}>
                        <Modal.Header closeButton>

                            <Modal.Title id="contained-modal-title-vcenter">
                                Send Email
                            </Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            <p>Give your mail below so that we can send you a copy of your WHEEL OF LIFE</p>
                            <input type="email" id="phone" placeholder="abc@gmail.com" />
                        </Modal.Body>
                        <Modal.Footer>
                            <Button variant="secondary" id="off" onClick={this.closeModal}>
                                Send
                            </Button>
                        </Modal.Footer>
                    </Modal>
                </div>
            </>
        );
    }
}

export default Email;