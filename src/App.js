import React from 'react';

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
        <div className="parent">
          <div className="t">
            <div id="l1" className="tiles" onClick={this.showdataentry}>Friends and Family:</div>
            <div id="l2" className="tiles" onClick={this.showdataentry}>Relationships:</div>
            <div id="l3" className="tiles" onClick={this.showdataentry}>Wealth:</div>
            <div id="l4" className="tiles" onClick={this.showdataentry}>Personal Growth:</div>
          </div>
          <div className="t1">
            <div id="l5" className="tiles1" onClick={this.showdataentry}>Health:</div>
            <div id="l6" className="tiles1" onClick={this.showdataentry}>Fun and Recreation</div>
            <div id="l7" className="tiles1" onClick={this.showdataentry}>Possesion:</div>
            <div id="l8" className="tiles1" onClick={this.showdataentry}>Career:</div>
          </div>
        </div>
      </div>

    );
  }
}

export default Header;

