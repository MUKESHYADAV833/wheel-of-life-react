import React, { Component } from 'react';
import Submitted from './submitted';
import { Modal, Button } from "react-bootstrap";

class Drag extends React.Component {
    constructor(props) {
        super(props)
        this.state = this.props.state


    }
    openModal = () => {
        this.setState({ numModal: true });

    }
    closeModal = () => this.setState({ numModal: false });

    render() {
        const { dropped, texts } = this.state;
        return (
            <div>
                <div className="tile" onClick={this.openModal()}>
                    <div className="child2">
                        {this.state.texts}
                        <hr className="hr" />
                        {dropped}

                    </div>
                </div>
                <div className="child1"></div>
                <div className="parent">
                </div>
                <Modal show={this.openModal} onHide={this.closeModal}>
                    <Modal.Header >
                        <Modal.Title></Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <div className="num1">
                            <Button className="l1">1</Button>
                            <Button className="l1">2</Button>
                            <Button className="l1">3</Button>
                            <Button className="l1">4</Button>

                        </div>
                        <div className="num2">
                            <Button className="l1">5</Button>
                            <div className="title">Select The Number</div>
                            <Button className="l1">6</Button>
                        </div>
                        <div className="num3">
                            <Button className="l1">7</Button>
                            <Button className="l1">8</Button>
                            <Button className="l1">9</Button>
                            <Button className="l1">10</Button>

                        </div>
                    </Modal.Body>
                    <Modal.Footer>

                    </Modal.Footer>
                </Modal>
            </div>
        )
    }

}
export default Drag;