import React from 'react';
import 'font-awesome/css/font-awesome.min.css';

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state =null
  }
  
  render() {
    return (
      <div className="header">
      <div className="head">Wheel Of Life</div>
     <div> <i className="fab fa-amazon"></i></div>
      {/* <div><i className="fa fa-spinner fa-spin">no spinner but why</i></div> */}
      </div>

    );
  }
}

export default Header;