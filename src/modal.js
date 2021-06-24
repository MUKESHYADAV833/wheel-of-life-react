import React, { Component } from "react";
import { Modal, Button } from "react-bootstrap";


class Email extends Component {
    constructor(props) {
        super(props)
        this.state = {
            mail: ""
        }
        this.mailInput= React.createRef();

    }
    getInput=(e)=>{
        let {mail} = this.state;
        this.setState({ mail: e.target.value });

    }

    sendEmail=()=>{
    //   var hide=  this.props.onHide;
    //   return hide;
    let {mail} = this.state;
    mail = this.mailInput.current.value;
     this.setState({ mail });


    }
    render() {
        return (
            <>
                <div
                    className="d-flex align-items-center justify-content-center"
                    style={{ height: "100vh" }}
                >
                    {/* <Button variant="primary" onClick={this.openModal}>ghd

                    </Button> */}
                </div>
                <div className="modal">

                    <Modal show={this.props.show} onHide={this.props.onHide}>
                        <Modal.Header closeButton>

                            <Modal.Title id="contained-modal-title-vcenter">
                                Send Email
                            </Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            <p>Give your mail below so that we can send you a copy of your WHEEL OF LIFE</p>
                            <input type="email" id="phone" placeholder="abc@gmail.com"  ref={this.mailInput} />
                        </Modal.Body>
                        <Modal.Footer>
                            <Button variant="secondary" id="off" onClick={this.sendEmail}>
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