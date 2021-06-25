import React, { Component } from "react";
import { Modal, Button } from "react-bootstrap";


class Email extends Component {
    constructor(props) {
        super(props)
        this.state = {
            mail: "",
            show: this.props.show
        }
        this.mailInput = React.createRef();

    }
    getInput = (e) => {
        let { mail } = this.state;
        this.setState({ mail: e.target.value });

    }

    sendEmail = () => {
        let { mail } = this.state;
        mail = this.mailInput.current.value;
        let re = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
        if (re.test(mail)) {
            this.setState({ mail });
            alert("succesful");
        }
        else {
            alert("Please provide valid email address");
        }


    }

    close = () => {
        let { show } = this.state;
        this.setState({ show: false });

    }
    render() {
        return (
            <>
                {this.state.show ?
                    <div className="modal">

                        <Modal show={this.props.show} >
                            <Modal.Header>
                                <Button onClick={this.close}>
                                    x
                                </Button>

                                <Modal.Title id="contained-modal-title-vcenter">
                                    Send Email
                                </Modal.Title>
                            </Modal.Header>
                            <Modal.Body>
                                <p>Give your mail below so that we can send you a copy of your WHEEL OF LIFE</p>
                                <input type="email" id="phone" placeholder="abc@gmail.com" ref={this.mailInput} />
                            </Modal.Body>
                            <Modal.Footer>
                                <Button variant="secondary" id="off" onClick={this.sendEmail}>
                                    Send
                                </Button>
                            </Modal.Footer>
                        </Modal>

                    </div>
                    : null}

            </>
        );
    }
}

export default Email;