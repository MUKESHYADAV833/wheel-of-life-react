import React from 'react';
import Tiles from './tile' ;
import Table from './slider'
import SyncIcon from '@material-ui/icons/Sync';
import DoneIcon from '@material-ui/icons/Done';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
// import { faAngleDoubleRight } from '@fortawesome/free-solid-svg-icons';
class UIModel extends React.Component {
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
          <div id="line">
          <div className="head">Wheel Of Life</div>
          <MailOutlineIcon id="mail"/>
          <DoneIcon id="done"/>
          <SyncIcon id="refresh" />
          </div>
        </div>
        <div><Table/></div>
        <div><Tiles /></div>
     
      </div>

    );
  }
}

export default UIModel;

