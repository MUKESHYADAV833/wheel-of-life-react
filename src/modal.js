import React, { Component } from "react";
import { Modal, Button } from "react-bootstrap";
import emailjs from 'emailjs-com';
import TemplateComponent from 'react-mustache-template-component'


class Email extends Component {
    constructor(props) {
        super(props)
        this.state = {
            mail: this.props.mail,
            show: this.props.show,
            data :
            {"Friends & Family": 1,
            "Relationships": 1,
            "Wealth": 1,
            "Personal Growth": 1,
            "Health": 1,
            "Fun & Recreation": 1,
            "Possesion": 1,
            "Career": 1
        }
        }
        this.mailInput = React.createRef();

    

    this.template = `
    < !DOCTYPE html>
    <html>
        <body>

            <h1>This is your Wheel Of Life</h1>
            <table style="font-family: arial, sans-serif; border-collapse: collapse; width: 30%;">
                <tr>
                    <th style="border: 1px solid #dddddd;  text-align: left; padding: 8px;">Area</th>
                    <th style="border: 1px solid #dddddd;  text-align: left; padding: 8px;">Rating</th>
                </tr>


                <tr>
                    <td style="border: 1px solid #dddddd;  text-align: left; padding: 8px; width: 75%;">Friends & Family</td>
                    <td style="border: 1px solid #dddddd;  text-align: left; padding: 8px; width: 25%;">{{ Friends & Family}}</td>
                </tr>
                <tr>
                    <td style="border: 1px solid #dddddd;  text-align: left; padding: 8px; background-color: #dddddd; width: 75%;">Relationships</td>
                    <td style="border: 1px solid #dddddd;  text-align: left; padding: 8px; background-color: #dddddd; width: 25%;">{{ Relationships }}</td>
                </tr>


                <tr>
                    <td style="border: 1px solid #dddddd;  text-align: left; padding: 8px; width: 75%;">Wealth</td>
                    <td style="border: 1px solid #dddddd;  text-align: left; padding: 8px; width: 25%;">{{ Wealth }}</td>
                </tr>
                <tr>
                    <td style="border: 1px solid #dddddd;  text-align: left; padding: 8px; background-color: #dddddd; width: 75%;">Personal Growth</td>
                    <td style="border: 1px solid #dddddd;  text-align: left; padding: 8px; background-color: #dddddd; width: 25%;">{{ Personal Growth }}</td>
                </tr>




                <tr>
                    <td style="border: 1px solid #dddddd;  text-align: left; padding: 8px; width: 75%;">Health</td>
                    <td style="border: 1px solid #dddddd;  text-align: left; padding: 8px; width: 25%;">{{ Health }}</td>
                </tr>
                <tr>
                    <td style="border: 1px solid #dddddd;  text-align: left; padding: 8px; background-color: #dddddd; width: 75%;">Fun & Recreation</td>
                    <td style="border: 1px solid #dddddd;  text-align: left; padding: 8px; background-color: #dddddd; width: 25%;">{{ Fun & Recreation}}</td>
                </tr>



                <tr>
                    <td style="border: 1px solid #dddddd;  text-align: left; padding: 8px; width: 75%;">Possesion</td>
                    <td style="border: 1px solid #dddddd;  text-align: left; padding: 8px; width: 25%;">{{ Possesion }}</td>
                </tr>
                <tr>
                    <td style="border: 1px solid #dddddd;  text-align: left; padding: 8px; background-color: #dddddd; width: 75%;">Career</td>
                    <td style="border: 1px solid #dddddd;  text-align: left; padding: 8px; background-color: #dddddd; width: 25%;">{{ Career }}</td>
                </tr>

            </table>
        </body>
    </html>`;
    }

    sendFinalReport(e) {
        e.preventDefault();


    }
    sendEmail = () => {
        let { mail,data} = this.state;
        mail = this.mailInput.current.value;
        let re = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
        if (re.test(mail)) {
            this.setState({ mail });
            emailjs.init('user_AT5nORStcFhAPLlCR9Xy2');
            var templateParams = {
                reply_to: mail,
                reportData: this.template
            };
            emailjs.send('default_service', 'template_jblhwao', templateParams)
                .then((mail) => {
                    console.log(mail);
                }, (error) => {
                    console.log(error.text);
                });
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
                                <Button onClick={this.close} className="closeBtn">
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