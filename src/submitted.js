import React from 'react';

class Submitted extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            isVisible: false
        }
    }
    render() {
        var a = "Submitted";
        return (
            <div>
                {this.state.isVisible ? <div>{a}</div> : null}                
            </div>
        )
    }
}

export default Submitted ;
