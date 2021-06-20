import React, { Component } from 'react'
import { Modal } from 'react-responsive-modal';
import 'react-responsive-modal/styles.css';

class ModalInClassComponents extends Component {

    onCloseModal = () => {
        this.setState({ modalDisplay: false })
    }

    render() {
        return (
            <div id="mod_parent" >
                <Modal modalId="mod" open={this.props.openClose} onClose={this.onCloseModal}>
                    <p>Give your mail below so that we can send you a copy of your WHEEL OF LIFE</p>
                    <input type="email" id="phone" /*onSubmit={e => setValue(e.target.value)}*/ placeholder="abc@gmail.com" />
                    <button onClick={this.onCloseModal}>Done</button>
                </Modal>
            </div>
        )
    }
}

export default ModalInClassComponents;