import React, { Component }  from 'react';
import { Modal, Button } from "react-bootstrap";

class Pop extends Component {
    constructor(props) {
        super(props);
        this.state= {
        isOpen: false,
      };
    }
      openModal = () => this.setState({ isOpen: true });
      closeModal = () => this.setState({ isOpen: false });
    
      render() {
        return (
          <>
            <div
              // className="d-flex align-items-center justify-content-center"
              // style={{ height: "100vh" }}
            >
              <Button variant="primary" onClick={this.openModal}>
                Launch demo modal
              </Button>
            </div>
            <Modal show={this.state.isOpen} onHide={this.closeModal}>
              <Modal.Header >
                <Modal.Title></Modal.Title>
              </Modal.Header>
              <Modal.Body>
                  <div className="num1">
                    <Button className="l1" onClick="onClick()">1</Button>
                    <Button className="l1" onClick="onClick()">2</Button>
                    <Button className="l1" onClick="onClick()">3</Button>
                    <Button className="l1" onClick="onClick()">4</Button>

                  <div className="l1">1</div>
                  <div className="l1">2</div>  
                  <div className="l1">3</div>  
                  <div className="l1">4</div>  

                  </div>
                  <div className="num2">
                  <Button className="l1" onClick="onClick()">5</Button>
                  <div className="title">Select The Number</div>
                    <Button className="l1" onClick="onClick()">6</Button>
                  </div>
                  <div className="num3">
                  <Button className="l1" onClick="onClick()">7</Button>
                  <Button className="l1" onClick="onClick()">8</Button>
                  <Button className="l1" onClick="onClick()">9</Button>
                  <Button className="l1" onClick="onClick()">10</Button>
  
                  </div>
                  </Modal.Body>
              <Modal.Footer>
                
              </Modal.Footer>
            </Modal>
          </>
        );
    }
  }
  export default Pop;