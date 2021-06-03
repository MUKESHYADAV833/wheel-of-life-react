import React from "react";

class Tiles extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      text : "Friends and Family"
    }
  }
  onDrop = (ev, cat) => {
    console.log(cat,"dhfgdf");
  }
  onDragOver = (e,id) => {
    console.log(id);
    e.stopPropagation();
    e.preventDefault();
  }
  render() {
    return (
      <div className="parent">
        <div className="child">
          <div onDragOver = {(e) => this.onDragOver(e, "friends")} onDrop = {(e) => this.onDrop(e, "friends")} className="tile" id="friends">{this.state.text}</div>
          <div className="tile" id="Rela">Relationships</div>
          <div className="tile" id="wealth">Wealth</div>
          <div className="tile" id="Personal"> Personal and Growth</div>
        </div>
        <div className="child1">
          <div className="tile" id="health">Health</div>
          <div className="tile" id="Fun">Fun and Recreation</div>
          <div className="tile" id="poss">Possession</div>
          <div className="tile" id="car">Career</div>
        </div>

      </div>


    );
  }

}
export default Tiles;