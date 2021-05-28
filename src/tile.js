import React from "react";
import reactDom from "react-dom";

class Tiles extends React.Component {
  render() {
    return (
      <div className="parent">
        <div className="child">
          <div className="tile" id="friends"> Friends and Family</div>
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