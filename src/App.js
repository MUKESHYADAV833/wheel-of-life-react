import React from 'react';
import DragDrop from './DragDrop';
import Submitted from './submitted';
import SyncIcon from '@material-ui/icons/Sync';
import DoneIcon from '@material-ui/icons/Done';
import MailOutlineIcon from '@material-ui/icons/MailOutline';

class UIModel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      display: true,
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
          display: false
        });
    //   }
    // });
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
            {display ? <DoneIcon onClick={(e) => this.submit(e)} id="done" /> : <MailOutlineIcon id="mail" />}
            <SyncIcon onClick={this.refreshPage} id="refresh" />
          </div>
        </div>
        <div>{display ? <DragDrop state={this.state} /> : <Submitted dropped={this.state.dropped} />}</div>
      </div>

    );
  }
}

export default UIModel;

