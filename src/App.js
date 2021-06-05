import React from 'react';
import DragDrop from './new'
import SyncIcon from '@material-ui/icons/Sync';
import DoneIcon from '@material-ui/icons/Done';
import MailOutlineIcon from '@material-ui/icons/MailOutline';

class UIModel extends React.Component {
  constructor(props) {
    super(props);
    this.state = null
  }

  showdataentry() {
    console.log("haii");
  }

  refreshPage = () => {
    window.location.reload();
  }

  render() {
    return (
      <div>
        <div className="header">
          <img id="logo" src='./wings2life.png' />
          <div id="line">
            <div className="head">Wheel Of Life</div>
            <MailOutlineIcon id="mail" />
            <DoneIcon id="done" />
            <SyncIcon onClick={this.refreshPage} id="refresh"/>
          </div>
        </div>
        <DragDrop/>

      </div>

    );
  }
}

export default UIModel;

