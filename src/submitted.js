import React from 'react';
import Chart from './chart';

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
                {this.state.isVisibl}
                <div><Chart/>Hello chart</div>                
            </div>
        )
    }
}

export default Submitted ;