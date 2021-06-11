import React from 'react';
import DragDrop from './new';
import Submitted from './submitted';
import SyncIcon from '@material-ui/icons/Sync';
import DoneIcon from '@material-ui/icons/Done';
import MailOutlineIcon from '@material-ui/icons/MailOutline';

class UIModel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      display: true
    }
  }

  submit(e) {
    this.setState({
      display: false
    });
  }

  refreshPage = () => {
    window.location.reload();
  }

  render() {
    const { display } = this.state;

    return (
      <div>
        <div className="header">
          <img id="logo" src='./wings2life.png' />
          <div id="line">
            <div className="head">Wheel Of Life</div>
            <MailOutlineIcon id="mail" />
            { display ? <DoneIcon onClick={(e) => this.submit(e)} id="done" /> : null }
            <SyncIcon onClick={this.refreshPage} id="refresh" />
          </div>
        </div>
        <div>{ display ? <DragDrop /> : <Submitted /> }</div>
      </div>

    );
  }
}

export default UIModel;

