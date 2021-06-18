import React from 'react';
import DragDrop from './DragDrop';
import Submitted from './submitted';
import SyncIcon from '@material-ui/icons/Sync';
import DoneIcon from '@material-ui/icons/Done';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import Example from './email';

class UIModel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      toggleDisplay: true,
      mailDisplay: false,
      items: [
        { no: 1 },
        { no: 2 },
        { no: 3 },
        { no: 4 },
        { no: 5 },
        { no: 6 },
        { no: 7 },
        { no: 8 },
        { no: 9 },
        { no: 10 }
      ],
      texts: [
        { text: "Friends and Family" },
        { text: "Relationships" },
        { text: "Wealth" },
        { text: "Personal and Growth" },
        { text: "Health" },
        { text: "Fun and Recreation" },
        { text: "Possession" },
        { text: "Career" }
      ],
      dropped: [null, null, null, null, null, null, null, null]
    }
  }

  submit(e) {
    // this.state.dropped.forEach(element => {
    //   if (element == null) {
    //     alert("Cannot submit an empty value");
    //     return;
    //   }
    //   else {
    this.setState({
      toggleDisplay: false
    });
    //   }
    // });
  }
  email(e) {
    this.setState({
      mailDisplay: true
    });
  }

  refreshPage = () => {
    window.location.reload();
  }

  render() {
    const { toggleDisplay, mailDisplay } = this.state;

    return (
      <div>
        <div className="header">
          <img id="logo" src='./wings2life.png' />
          <div id="line">
            <div className="head">Wheel Of Life</div>
            {toggleDisplay ? <DoneIcon onClick={(e) => this.submit(e)} id="done" /> : <MailOutlineIcon id="mail" onClick={(e) => this.email(e)} />}
            <SyncIcon onClick={this.refreshPage} id="refresh" />
          </div>
        </div>
        <div>{toggleDisplay ? <DragDrop state={this.state} /> : <Submitted dropped={this.state.dropped} />}</div>
        <div>{mailDisplay ? <Example /> : null}</div>
      </div>

    );
  }
}

export default UIModel;

