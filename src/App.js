import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { fas } from '@fortawesome/free-solid-svg-icons';
import Tiles from './tile' ;
import Table from './slider'
import { faAngleDoubleRight } from '@fortawesome/free-solid-svg-icons';

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = null
  }

  showdataentry() {
    console.log("haii");
  }


  render() {
    return (
      <div>
        <div className="header">
          <img id="logo" src='./wings2life.png' />
          <div className="head">Wheel Of Life</div>      
        </div>
        <div><Table/></div>
        <div><Tiles /></div>
     
      </div>

    );
  }
}

export default Header;

