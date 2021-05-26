import React from "react";
import reactDom from "react-dom";

class Tiles extends React.Component {
  render() {
    return (
      <div className="parent">
        <div className="s">
          <div className="pair">
            <div id="l1" className="tiles" onClick={this.showdataentry}>Friends and Family:</div>
            <div id="s1" className="data" >10</div>
          </div>
          <div className="pair">
            <div id="l2" className="tiles" onClick={this.showdataentry}>Relationships:</div>
            <div id="s2" className="data">10</div>
          </div>
          <div className="pair">
            <div id="l3" className="tiles" onClick={this.showdataentry}>Wealth:</div>
            <div id="s3" className="data">10</div>
          </div>
          <div className="pair">
            <div id="l4" className="tiles" onClick={this.showdataentry}>Personal Growth:</div>
            <div id="s4" className="data">10</div>
          </div>
        </div>
        <div className="s1">
          <div className="pair">
            <div id="l5" className="tiles" onClick={this.showdataentry}>Health :</div>
            <div id="s5" className="data" >10</div>
          </div>
          <div className="pair">
            <div id="l6" className="tiles" onClick={this.showdataentry}>Fun and Recreation:</div>
            <div id="s6" className="data">10</div>
          </div>
          <div className="pair">
            <div id="l7" className="tiles" onClick={this.showdataentry}>Possesion:</div>
            <div id="s7" className="data">10</div>
          </div>
          <div className="pair">
            <div id="l8" className="tiles" onClick={this.showdataentry}>Career:</div>
            <div id="s8" className="data">10</div>
          </div>
        </div>
       
      </div>
    );
  }

}
export default Tiles;